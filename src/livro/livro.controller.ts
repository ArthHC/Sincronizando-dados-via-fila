import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { LivroService } from "./livro.service";
import { PrismaClient as Slave1Client } from '../../src/prisma/slave1';
import { PrismaClient as Slave2Client } from '../../src/prisma/slave2';


@Controller('/livros')
export class LivroController {

  constructor(private readonly service: LivroService) {}

  @Post()
  create(@Body() body: { titulo: string; autor: string; ano: number }) {
    return this.service.create(body.titulo, body.autor, body.ano);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { titulo: string; autor: string; ano: number }) {
    return this.service.update(Number(id), body.titulo, body.autor, body.ano);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}