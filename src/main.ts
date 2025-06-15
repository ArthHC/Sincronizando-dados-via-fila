import './queue/sync.worker'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueueService } from './queue/queue.service';
import { setupBullBoard } from './queue/bull-board';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const queueService = app.get(QueueService);
  setupBullBoard(queueService.queue, app.getHttpAdapter().getInstance());

  await app.listen(3000);
}
bootstrap();