# API para Academia de Jiu-Jitsu

API backend para um sistema de gerenciamento de academia de jiu-jitsu, incluindo gerenciamento de alunos, modalidades, aulas e progresso de alunos.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Zod (validação)
- Bcryptjs (criptografia)
- JWT (autenticação)

## Funcionalidades

- Autenticação de usuários (cadastro e login)
- Gerenciamento de modalidades
- Gerenciamento de aulas (individuais e recorrentes)
- Sistema de check-in para aulas
- Acompanhamento de progresso dos alunos
- Controle de faixas e promoções
- Autenticação JWT com refresh token

## Estrutura do Banco de Dados

- **User**: Cadastro de usuários (admin, instrutor, aluno)
- **Modality**: Modalidades disponíveis (jiu-jitsu, wrestling, etc.)
- **BeltRank**: Graduações por modalidade (faixas)
- **Class**: Aulas (individuais e recorrentes)
- **ClassRecurrence**: Configuração de recorrência de aulas
- **CheckIn**: Registro de presença em aulas
- **StudentProgress**: Acompanhamento de progresso por aluno e faixa

## Como Executar

### Pré-requisitos

- Node.js
- PostgreSQL
- NPM ou Yarn

### Configuração do ambiente

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure o arquivo .env:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/jiu_jitsu_academy?schema=public"
   PORT=3333
   JWT_SECRET="sua_chave_secreta_jwt"
   COOKIE_SECRET="sua_chave_secreta_cookie"
   ```
4. Execute as migrações do Prisma:
   ```
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```
   npm run dev
   ```

## Rotas da API

### Autenticação

- **POST /sign-up**: Cadastro de usuário
- **POST /sign-in**: Login de usuário (retorna token JWT)
- **PATCH /token/refresh**: Renovação do token JWT usando refresh token

### Modalidades

- **POST /modalities**: Criar modalidade (requer autenticação + role ADMIN)
- **GET /modalities**: Listar modalidades (requer autenticação)

### Aulas

- **POST /classes**: Criar aula (requer autenticação + role INSTRUCTOR ou ADMIN)
- **GET /classes**: Listar aulas (requer autenticação)

### Check-in

- **POST /check-ins**: Fazer check-in em uma aula (requer autenticação)

### Progresso do Aluno

- **GET /students/:id/progress**: Obter progresso do aluno (requer autenticação)

## Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação:

1. No login, o usuário recebe um token JWT e um refresh token (armazenado em cookie HTTP-only)
2. O token JWT deve ser enviado no header `Authorization: Bearer {token}` para acessar rotas protegidas
3. Quando o token expirar, utilize a rota `/token/refresh` para obter um novo token
4. Os tokens possuem controle de permissões baseado na role do usuário (ADMIN, INSTRUCTOR, STUDENT)

## Próximos Passos

- Melhorar a geração de aulas recorrentes
- Implementar sistema de notificações para aulas
- Criar dashboard com estatísticas de frequência 