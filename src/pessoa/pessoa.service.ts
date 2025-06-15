import { Injectable } from '@nestjs/common';
import { PrismaMasterService } from '../prisma/prisma-master.service';
import { PrismaSlave1Service } from '../prisma/prisma-slave1.service';
import { PrismaSlave2Service } from '../prisma/prisma-slave2.service';
import { QueueService } from '../queue/queue.service';
import { log } from 'console';

@Injectable()
export class PessoaService {
  constructor(
    private readonly prisma: PrismaMasterService,
    private readonly slave1: PrismaSlave1Service,
    private readonly slave2: PrismaSlave2Service,
    private readonly queueService: QueueService,
  ) { }

  async findAllPessoasOnMaster() {
    return this.prisma.pessoa.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findAllPessoasOnSlave1() {
    return this.slave1.pessoa.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findAllPessoasOnSlave2() {
    return this.slave2.pessoa.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async create(nome: string, idade: number, cpf: string) {
    try {
      const pessoa = await this.prisma.pessoa.create({
        data: { nome, idade, cpf },
      });
      await this.queueService.addSyncJob({ ...pessoa, entity: 'pessoa' });
      log('criado');
      return pessoa;
    } catch (err) {
      log(err);
    }
  }

  async update(id: number, nome: string, idade: number) {
    const pessoa = await this.prisma.pessoa.update({
      where: { id },
      data: { nome, idade },
    });

    await this.queueService.addSyncJob({ ...pessoa, entity: 'pessoa' });

    return pessoa;
  }

  async delete(id: number) {
    await this.prisma.pessoa.delete({
      where: { id },
    });

    await this.queueService.addSyncJob({ id, entity: 'pessoa', deleted: true });

    return { deleted: true };
  }
}
