<table>
  <tr>
    <td>
      <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
    </td>
    <td><h1>DEV-TRAINING</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API desenvolvida em __NestJS__ que implementa um CRUD simples, que permite a inclusão, alteração, consulta e exclusão de cursos.<br />
Desenvolvido durante o [Mini Curso Fundamentos do Framework NestJS](https://www.youtube.com/playlist?list=PLE0DHiXlN_qqRNX4KpkNKvFswCXHUwoyL) do prof. Jorge Aluizio.
<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição |
|---|---|---|
| GET | /courses | Lista de cursos |
| GET | /courses/:id | Dados do curso |
| POST | /courses | Inclusão de curso |
| PATCH | /courses/:id | Alteração do curso |
| DELETE | /courses/:id | Exclusão do curso |


## :hammer_and_wrench: Tecnologias
* __NestJS__

## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/dev-training.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação
$ yarn start:dev

# Abra http://localhost:3000 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
