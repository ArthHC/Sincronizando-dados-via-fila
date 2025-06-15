import { Injectable } from '@nestjs/common';
import { PrismaMasterService } from '../prisma/prisma-master.service';
import { PrismaSlave1Service } from '../prisma/prisma-slave1.service';
import { PrismaSlave2Service } from '../prisma/prisma-slave2.service';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class LivroService {
  constructor(
    private readonly prisma: PrismaMasterService,
    private readonly slave1: PrismaSlave1Service,
    private readonly slave2: PrismaSlave2Service,
    private readonly queueService: QueueService,
  ) {}

  async findAllBooksOnMaster() {
    return this.prisma.livro.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findAllBooksOnSlave1() {
    return this.slave1.livro.findMany({
      orderBy: { id: 'asc' },
    });
  }
  
  async findAllBooksOnSlave2() {
    return this.slave2.livro.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async create(titulo: string, autor: string, ano: number) {
    try {
      const livro = await this.prisma.livro.create({
        data: { titulo, autor, ano },
      });
      await this.queueService.addSyncJob({ ...livro, entity: 'livro' });
      return livro;
    } catch (err) {
      console.error(err);
    }
  }

  async update(id: number, titulo: string, autor: string, ano: number) {
    const livro = await this.prisma.livro.update({
      where: { id },
      data: { titulo, autor, ano },
    });

    await this.queueService.addSyncJob({ ...livro, entity: 'livro' });

    return livro;
  }

  async delete(id: number) {
    await this.prisma.livro.delete({
      where: { id },
    });

    await this.queueService.addSyncJob({ id, entity: 'livro', deleted: true });

    return { deleted: true };
  }
}