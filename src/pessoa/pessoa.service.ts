import { Injectable } from '@nestjs/common';
import { PrismaMasterService } from '../prisma/prisma-master.service';
import { QueueService } from '../queue/queue.service';
import { log } from 'console';

@Injectable()
export class PessoaService {
  constructor(
    private readonly prisma: PrismaMasterService,
    private readonly queueService: QueueService,
  ) {}

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
