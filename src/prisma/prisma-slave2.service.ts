import * as dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaClientSlave2 } from '@prisma/client';

@Injectable()
export class PrismaSlave2Service extends PrismaClientSlave2 implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
