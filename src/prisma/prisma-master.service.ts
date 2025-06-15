import * as dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaClientMaster } from '@prisma/client';

@Injectable()
export class PrismaMasterService extends PrismaClientMaster implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
