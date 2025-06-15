import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaController } from './pessoa/pessoa.controller';
import { PessoaService } from './pessoa/pessoa.service';
import { QueueService } from './queue/queue.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaMasterService } from './prisma/prisma-master.service';
import { PrismaSlave1Service } from './prisma/prisma-slave1.service';
import { PrismaSlave2Service } from './prisma/prisma-slave2.service';
import './queue/sync.worker';
import { QueueModule } from './queue/queue.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    QueueModule,
  ],
  controllers: [
    AppController,
    PessoaController,
  ],
  providers: [
    AppService,
    PessoaService,
    PrismaMasterService,
    PrismaSlave1Service,
    PrismaSlave2Service,
    QueueService,
    ConfigService,
  ],
})
export class AppModule { }
