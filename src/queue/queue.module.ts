import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { SyncWorkerService } from './SyncWorker.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [QueueService, SyncWorkerService, ConfigService],
  exports: [QueueService],
})
export class QueueModule {}