Documentação do Projeto

Este projeto utiliza Docker Compose para configurar e rodar o ambiente de desenvolvimento. O projeto inclui um banco de dados PostgreSQL, um backend e um frontend.

Estrutura do Projeto

O arquivo docker-compose.yml define três serviços principais:

db: O serviço de banco de dados PostgreSQL.
backend: O serviço do backend, construído a partir do diretório ./backend.
frontend: O serviço do frontend, construído a partir do diretório ./frontend.
Requisitos

Docker instalado
Docker Compose instalado
Como Rodar o Projeto

Clone o Repositório
Clone o repositório do projeto para o seu ambiente local:

bash

Verify

Open In Editor
Edit
Run
Copy code
git clone <URL-DO-REPOSITORIO>
cd <NOME-DO-DIRETORIO-DO-PROJETO>
Construir e Subir os Containers
Navegue até o diretório do projeto e execute o comando abaixo para construir as imagens e iniciar os containers:

bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose up --build
O --build força a reconstrução das imagens, o que é útil se você fez alterações no código.

Acessar os Serviços
Frontend: Acesse http://localhost:4200 no seu navegador.
Backend: Acesse http://localhost:3000 no seu navegador ou para chamadas de API.
Banco de Dados: O PostgreSQL está disponível na porta 5432 e pode ser acessado com as credenciais fornecidas no docker-compose.yml:
Usuário: user
Senha: password
Banco de Dados: empodera
Parar os Containers
Para parar os containers e remover os volumes, use o comando:

bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose down -v
Outras Operações
Ver Logs: Para ver os logs de todos os serviços, use:
bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose logs
Entrar no Container do Backend:
bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose exec backend sh
Entrar no Container do Frontend:
bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose exec frontend sh
Entrar no Container do Banco de Dados:
bash

Verify

Open In Editor
Edit
Run
Copy code
docker-compose exec db psql -U user -d empodera
Configurações do Docker Compose

O arquivo docker-compose.yml define os seguintes serviços e configurações:

yaml

Verify

Open In Editor
Edit
Copy code
version: '3'
services:
  db:
    image: postgres
    container_name: database
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: empodera
    volumes:
      - postgres:/var/lib/postgresql/data
    networks:
      - nestjs
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - db
    networks:
      - nestjs
  frontend:
    build: ./frontend
    ports:
      - "4200:4200"

volumes:
  postgres:
    name: nest-prisma-docker-db

networks:
  nestjs:
    driver: bridge

Rodando os Testes

Para roda os testes use o comando `npm run test`

Acesso a documentação

Para ter acesso a documentação acesse a rota `http://localhost:3000/docs`

Licença

Este projeto é licenciado sob a MIT License.