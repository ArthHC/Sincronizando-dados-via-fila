import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { Worker } from 'bullmq';
import { PrismaClient as Slave1Client } from '../../src/prisma/slave1';
import { PrismaClient as Slave2Client } from '../../src/prisma/slave2';

@Injectable()
export class SyncWorkerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SyncWorkerService.name);
  private worker: Worker;
  private slave1: Slave1Client;
  private slave2: Slave2Client;

  constructor() {
    this.logger.log('SyncWorkerService instanciado');
    this.slave1 = new Slave1Client();
    this.slave2 = new Slave2Client();
  }

  async onApplicationBootstrap() {
    this.logger.log('Iniciando worker de sincronização...');
    this.startWorker();
  }

  private async syncPessoa(db: any, data: any) {
    try {
      const existing = await db.pessoa.findUnique({ where: { id: data.id } });

      if (data.deleted) {
        await db.pessoa.delete({ where: { id: data.id } }).catch(() => {});
        this.logger.log(`Pessoa ${data.id} deletada no slave`);
      } else if (existing) {
        await db.pessoa.update({
          where: { id: data.id },
          data: { nome: data.nome, idade: data.idade, cpf: data.cpf },
        });
        this.logger.log(`Pessoa ${data.id} atualizada no slave`);
      } else {
        await db.pessoa.create({
          data: { id: data.id, nome: data.nome, idade: data.idade, cpf: data.cpf },
        });
        this.logger.log(`Pessoa ${data.id} criada no slave`);
      }
    } catch (error) {
      this.logger.error(`Erro ao sincronizar pessoa ${data.id}: ${error.message}`);
      throw error;
    }
  }
  
  private async syncLivro(db: any, data: any) {
    try {
      const existing = await db.livro.findUnique({ where: { id: data.id } });

      if (data.deleted) {
        await db.livro.delete({ where: { id: data.id } }).catch(() => {});
        this.logger.log(`Livro ${data.id} deletado no slave`);
      } else if (existing) {
        await db.livro.update({
          where: { id: data.id },
          data: { titulo: data.titulo, autor: data.autor, ano: data.ano },
        });
        this.logger.log(`Livro ${data.id} atualizado no slave`);
      } else {
        await db.livro.create({
          data: { id: data.id, titulo: data.titulo, autor: data.autor, ano: data.ano },
        });
        this.logger.log(`Livro ${data.id} criado no slave`);
      }
    } catch (error) {
      this.logger.error(`Erro ao sincronizar livro ${data.id}: ${error.message}`);
      throw error;
    }
  }

  startWorker() {
    this.logger.log('Conectando ao Redis...');

    this.worker = new Worker(
      'sync-items',
      async (job) => {
        this.logger.log(`Processando job ${job.id} (${job.name})`);
        try {
          const data = job.data;
          this.logger.debug(`Dados do job: ${JSON.stringify(data)}`);

          if (data.entity === 'pessoa') {
            await Promise.all([
              this.syncPessoa(this.slave1, data),
              this.syncPessoa(this.slave2, data)
            ]);
          } else if (data.entity === 'livro') {
            await Promise.all([
              this.syncLivro(this.slave1, data),
              this.syncLivro(this.slave2, data)
            ]);
          }
          return { status: 'success' };
        } catch (error) {
          this.logger.error(`Falha no job ${job.id}: ${error.message}`);
          throw error;
        }
      },
      { 
        connection: { 
          host: 'localhost',
          port: 6379
        },
        autorun: true
      }
    );

    this.worker.on('ready', () => this.logger.log('✅ Worker conectado ao Redis e pronto'));
    this.worker.on('active', (job) => this.logger.log(`🏁 Job ${job.id} iniciado`));
    this.worker.on('completed', (job) => this.logger.log(`✅ Job ${job.id} completado`));
    this.worker.on('failed', (job, err) => {
      if (job) {
        this.logger.error(`❌ Job ${job.id} falhou: ${err.message}`);
      } else {
        this.logger.error(`❌ Job falhou: ${err.message}`);
      }
    });
    this.worker.on('error', (err) => this.logger.error(`🔥 Erro no worker: ${err.message}`, err.stack));
    this.worker.on('stalled', (jobId) => this.logger.warn(`⚠️ Job ${jobId} parado`));
    this.worker.on('closing', () => this.logger.warn('🔌 Worker fechando conexão'));
    
    this.logger.log('Worker configurado. Aguardando jobs...');
  }
}