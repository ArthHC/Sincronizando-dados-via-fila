import { Injectable } from '@nestjs/common';
import { PrismaMasterService } from '../prisma/prisma-master.service';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class LivroService {
  constructor(
    private readonly prisma: PrismaMasterService,
    private readonly queueService: QueueService,
  ) {}

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