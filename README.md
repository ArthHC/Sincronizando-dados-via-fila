<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
Projeto principal da segunda nota para a avaliação da matéria de implantação e integração, UnC.

Este projeto implementa um sistema de sincronização de banco de dados onde um banco master (que aceita operações CRUD) replica seus dados para dois bancos slaves (somente leitura) utilizando filas (BullMQ) para garantir consistência e resiliência.

## Arquitetura e Funcionalidades Principais

### 🎯 Objetivo Principal

Sincronizar operações CRUD de um banco master para dois bancos slaves de forma assíncrona e confiável, garantindo:

- Consistência de dados entre os bancos;
- Tolerância a falhas com reprocessamento automático;
- Desempenho através de processamento assíncrono;

### ⚙️ Componentes-Chave

1. **Banco Master (SQLite)**
   - Aceita operações CRUD completas
   - Duas tabelas implementadas: Pessoa e livro (exemplo)
   - Prisma ORM para acesso ao banco
2. **Bancos Slaves (SQLite)**
   - Réplicas somente leitura
   - Sincronizados automaticamente com o master
   - Ideal para consultas e relatórios
3. **BullMQ (Redis/Memurai)**
   - Gerencia fila de sincronização
   - Controla reprocessamento de falhas
   - Garante entrega de mensagens
   - Interface de monitoramento via Bull Board
4. **Worker de Sincronização**
   - Processa jobs da fila
   - Aplica mudanças nos bancos slaves
   - Trata automaticamente falhas e retentativas

## Tecnologias utilizadas
Backend: NestJS
- Banco de Dados: SQLite (master + 2 slaves)
- ORM: Prisma
- Fila: BullMQ + Redis/Memurai
- Monitoramento: Bull Board

## Funcionalidades Implementadas
- CRUD completo no banco master
- Sincronização automática para bancos slaves
- Reprocessamento de falhas automático
- Monitoramento em tempo real das filas
- Resiliência contra falhas de rede/conexão
- Logs detalhados para diagnóstico

## Setup do projeto

### Pré-requisitos
1. Node.js (v18 ou superior)
2. Redis (Linux/MacOs) ou Memurai (Windows)
3. Postman (para teste dos endpoints)
4. Git (opcional)

### 1. Clonar o repositório ou baixar o ZIP
Clone o repositório atraves dos próprios comandos do git.
```bash
git clone https://github.com/ArthHC/Sincronizando-dados-via-fila.git
cd sincronizacao-banco-dados
```

### 2. Instalar as dependências
```bash
$ npm install
```

### 3. Configurações adicionais
Aqui irá constar algumas ações adicionais caso o projeto não seja clonado completamente.

### 3.1 Configurações dos bancos de dados
Caso não haja as pastas master, slave1 e slave2 em src/prisma execute os seguintes comandos para criar os prismas clients
```bash
$ npm run prisma:generate:master
$ npm run prisma:generate:slave1
$ npm run prisma:generate:slave2
```
Em seguida rode os seguintes comandos para criar os bancos
```bash
$ npm run prisma:db:push:master
$ npm run prisma:db:push:slave1
$ npm run prisma:db:push:slave2
```

### 3.2 Configuração da fila
Garanta que você tenha instalado algum gerenciador de memória ou mensagens em sua máquina. Neste projeto utilizamos o Memurai para windows. Caso esteja utilizando Linux ou MacOs pode utilizar o Redis.
1. Baixe o memutai pelo site oficial: https://www.memurai.com/get-memurai
2. Inicie o serviço do memurai.
3. Recomendamos antes de iniciar o projeto abrir outro terminal e executar o seguinte comando, para garantir que ele está rodando
```bash
$ memurai
```

### 3.3 Configuração do postman
Abra seu postman ou insomnia e importe o arquivo "data-sync-queue.postman_collection". Assim que importar já estará pronto para fazer as requisições

### 4. Executar o projeto
Em um terminal rode o seguinte comando
```bash
$ npm run start:dev
```
Caso tudo de certo você já pode abrir o postman e testar as requisições. Se desejar pode ainda monitorar o funcionamento da fila através do painel do BullMQ: http://localhost:3000/admin/queues
