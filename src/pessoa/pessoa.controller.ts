import { Controller, Post, Put, Delete, Param, Body, Get } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PrismaClient as Slave1Client } from '../../src/prisma/slave1';
import { PrismaClient as Slave2Client } from '../../src/prisma/slave2';

@Controller('/pessoas')
export class PessoaController {
  constructor(private readonly service: PessoaService) { }

  @Get()
  findAllOnMaster() {
    return this.service.findAllPessoasOnMaster();
  }

  @Get('slave1')
  findAllOnSlave1() {
    return this.service.findAllPessoasOnSlave1();
  }

  @Get('slave2')
  findAllOnSlave2() {
    return this.service.findAllPessoasOnSlave2();
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
