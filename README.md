# CT Kings API

## Descrição
CT Kings é uma API backend desenvolvida para gerenciar aulas de artes marciais e academias de lutas. O sistema permite o controle de usuários, instrutores, aulas e check-ins dos alunos.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Linguagem fortemente tipada que compila para JavaScript
- **Fastify**: Framework web de alta performance para Node.js
- **Prisma**: ORM (Object-Relational Mapping) para interação com o banco de dados
- **PostgreSQL**: Banco de dados relacional
- **JWT**: JSON Web Tokens para autenticação
- **Zod**: Biblioteca de validação de esquemas
- **Docker**: Containerização para facilitar o desenvolvimento e implantação

## Funcionalidades

- Autenticação de usuários (login/registro)
- Gerenciamento de usuários com diferentes níveis (alunos, instrutores, administradores)
- Sistema de faixas (branca, azul, roxa, marrom, preta)
- Criação e gerenciamento de aulas
- Sistema de check-in para aulas
- Proteção de rotas com middleware de autenticação

## Estrutura do Projeto

- `/prisma`: Definições de schema e migrações do banco de dados
- `/src`: Código fonte da aplicação
  - `/@types`: Definições de tipos TypeScript
  - `/application`: Lógica da aplicação (controllers, use-cases, routes)
  - `/factories`: Factories para injeção de dependências
  - `/server`: Configuração do servidor

## Como Executar

### Pré-requisitos
- Node.js
- Docker e Docker Compose

### Passos para Execução

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o banco de dados PostgreSQL:
   ```
   docker-compose up -d
   ```
4. Execute as migrações do Prisma:
   ```
   npx prisma migrate dev
   ```
5. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
6. O servidor estará disponível em `http://localhost:3001`

## Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente (definidas no arquivo `.env`):

- `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL
- `JWT_SECRET`: Chave secreta para assinatura dos tokens JWT

---

# CT Kings API (English)

## Description
CT Kings is a backend API developed to manage martial arts classes and fighting academies. The system allows for the management of users, instructors, classes, and student check-ins.

## Technologies

- **Node.js**: JavaScript runtime environment
- **TypeScript**: Strongly typed language that compiles to JavaScript
- **Fastify**: High-performance web framework for Node.js
- **Prisma**: ORM (Object-Relational Mapping) for database interaction
- **PostgreSQL**: Relational database
- **JWT**: JSON Web Tokens for authentication
- **Zod**: Schema validation library
- **Docker**: Containerization to facilitate development and deployment

## Features

- User authentication (login/registration)
- User management with different levels (students, instructors, administrators)
- Belt system (white, blue, purple, brown, black)
- Creation and management of classes
- Check-in system for classes
- Route protection with authentication middleware

## Project Structure

- `/prisma`: Database schema definitions and migrations
- `/src`: Application source code
  - `/@types`: TypeScript type definitions
  - `/application`: Application logic (controllers, use-cases, routes)
  - `/factories`: Factories for dependency injection
  - `/server`: Server configuration

## How to Run

### Prerequisites
- Node.js
- Docker and Docker Compose

### Execution Steps

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the PostgreSQL database:
   ```
   docker-compose up -d
   ```
4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```
5. Start the development server:
   ```
   npm run dev
   ```
6. The server will be available at `http://localhost:3001`

## Environment Variables

The project uses the following environment variables (defined in the `.env` file):

- `DATABASE_URL`: PostgreSQL database connection URL
- `JWT_SECRET`: Secret key for JWT token signing 