import { Controller, Post, Put, Delete, Param, Body, Get } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PrismaClient as Slave1Client } from '../../src/prisma/slave1';
import { PrismaClient as Slave2Client } from '../../src/prisma/slave2';

@Controller('/pessoas')
export class PessoaController {
  constructor(private readonly service: PessoaService) { }

  @Get('test-slaves')
  async testSlaves() {
    try {
      const slave1 = new Slave1Client();
      const slave2 = new Slave2Client();

      await slave1.$connect();
      await slave2.$connect();

      const count1 = await slave1.pessoa.count();
      const count2 = await slave2.pessoa.count();

      return {
        slave1_connected: true,
        slave2_connected: true,
        slave1_count: count1,
        slave2_count: count2
      };
    } catch (error) {
      return {
        error: error.message,
        stack: error.stack
      };
    }
  }

  @Post()
  create(@Body() body: { nome: string; idade: number; cpf: string }) {
    return this.service.create(body.nome, body.idade, body.cpf);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nome: string; idade: number }) {
    return this.service.update(Number(id), body.nome, body.idade);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
