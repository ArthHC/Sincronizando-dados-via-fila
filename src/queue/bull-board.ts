import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/BullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { Queue } from 'bullmq';
import { Express } from 'express';

export function setupBullBoard(queue: Queue, server: Express) {
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/admin/queues');

  createBullBoard({
    queues: [new BullMQAdapter(queue)],
    serverAdapter,
  });

  server.use('/admin/queues', serverAdapter.getRouter());
}