# Teste Ada (Kanban Board)

## Rodar o projeto

```console
> docker-compose up
```
Rodando esse comando na pasta principal do projeto, tanto o front-end quando o back-end vão subir para a imagem e rodar na url `http://localhost:8000`

## Rodar os testes

```console
> cd FRONT
> npm run test
```
Foram realizados testes para os serviços e para os reducers. Não houve tempo de desenvolver os testes de componentes por ter pouco tempo para desenvolver tudo.

## Considerações

Por conta de eu ter pouco tempo para desenvolver ainda faltou alguns detalhes para deixar mais navegável ainda:
1. Desabilitar o botão navegador da esquerda quando estivesse na coluna ToDo e o da direita quando Done.
2. Tratar erro de formulário.
2. Desenvolver os testes para os componentes desenvolvido.
3. Aplicar acessibilidade e responsividade.
4. Configurar melhor a pasta `styles` para que usasse mais variáveis ao invés de repetir fontes, cores e tamanhos.

Mas de um modo geral, todas as especificações do teste foram realizadas incluindo os diferenciais como lint e Docker. No  mais, tudo certo.

  
