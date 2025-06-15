import { Worker } from 'bullmq';
import { PrismaClient as Slave1Client } from '../../src/prisma/slave1';
import { PrismaClient as Slave2Client } from '../../src/prisma/slave2';

if (require.main === module) {

  const slave1 = new Slave1Client();
  const slave2 = new Slave2Client();

  const connection = {
    host: 'localhost',
    port: 6379,
  };

  const syncPessoa = async (db, data) => {
    const existing = await db.pessoa.findUnique({ where: { id: data.id } });

    if (data.deleted) {
      await db.pessoa.delete({ where: { id: data.id } }).catch(() => { });
    } else if (existing) {
      await db.pessoa.update({
        where: { id: data.id },
        data: {
          nome: data.nome,
          idade: data.idade,
          cpf: data.cpf,
        },
      });
    } else {
      await db.pessoa.create({
        data: {
          id: data.id,
          nome: data.nome,
          idade: data.idade,
          cpf: data.cpf,
        },
      });
    }
  };

  new Worker(
    'sync-items',
    async (job) => {
      const data = job.data;

      if (data.entity === 'pessoa') {
        await Promise.all([syncPessoa(slave1, data), syncPessoa(slave2, data)]);
      }

      // Se quiser adicionar `Livro`, adicione outro if (data.entity === 'livro') { ... }
    },
    { connection },
  );

  console.log('Worker iniciado em modo standalone');
}

