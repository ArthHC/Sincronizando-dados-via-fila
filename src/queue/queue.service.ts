import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueueService {
  public queue: Queue;

  constructor(private configService: ConfigService) {
    this.queue = new Queue('sync-items', {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    });
  }

  async addSyncJob(data: any) {
    try {
      const job = await this.queue.add('sync', data, {
        jobId: `${data.entity}_${data.id || 'new'}_${Date.now()}`,
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
        // delay: 5000 // Delay de 5 segundos para evitar sobrecarga
      });

      console.log(`✅ Job adicionado: ${job.id}`, data);
      return job;
    } catch (err) {
      console.error('❌ Erro ao adicionar job:', err);
      throw err;
    }
  }
}

