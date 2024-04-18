Como instalar e configurar o projeto

## Pré-requisitos:
Docker
Git
Composer

## Passos:
1 - Clone o repositório para o seu computador:
``` git clone https://github.com/SamuelHubner/Laravel-Sail ```

2 - Acesse a pasta do projeto:
``` cd repositorio ```

3 - Instale as dependências do projeto:
``` composer install ```

4 - Inicie o ambiente de desenvolvimento:
``` ./vendor/bin/sail up ou sail up ``` 
    4.1 - Para usar os comandos sail (sailt start,sail stop e afins) é necessário configurar o alias: ``` alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)' ```

5 - Crie o arquivo .env
``` cp .env.example .env ```

6 - Gere uma chave para sua aplicação
``` php artisan key:generate ```

7 - Crie o banco de dados
``` docker exec 'nome_container_laravel' php artisan migrate ```

8 - Instale as dependencias
``` npm install ```

9 - Rode o projeto
``` npm run dev ```
