import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivroService } from "./livro.service";


@Controller('/livros')
export class LivroController {
  constructor(private readonly service: LivroService) {}

  @Get()
  findAllOnMaster() {
    return this.service.findAllBooksOnMaster();
  }

  @Get('slave1')
  findAllOnSlave1() {
    return this.service.findAllBooksOnSlave1();
  }

  @Get('slave2')
  findAllOnSlave2() {
    return this.service.findAllBooksOnSlave2();
  }

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