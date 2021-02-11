# Teste para Analistas Front-end - Ide@l 

## Instruções para rodar o projeto:

- Entre no diretório edson/
- Através do terminal, execute o comando: npm install 
- Após instalar as dependências do projeto, execute os scripts npm
(npm run build e npm start).


## Decisões técnicas

Optei por desenvolver o projeto utilizando Sass, pois apesar de ser um site simples e ser possível realizá-lo utilizando apenas css puro, quis demonstrar a minha visão a cerca de escalabilidade e manutenabilidade e a importância desses conceitos para se alcançar qualidade no processo e consequentemente qualidade na entrega do produto final.

Para o desenvolvimento da interface utilizei a técnica mobile first. 
Apesar do teste não explicitar a necessidade de uma interface responsiva, tenho isso como mandatório em qualquer projeto web.
Decidi aplicar esta técnica pois acredito que se evite bugs ao focar-se em dispositivos mobile, que em comparação a outros dispositivos tem uma variedade de tamanhos de tela muito maior, aumentando as chances de em algum deles as informações não serem apresentadas como planejado.

Para o desenvolvimento eu usei o webpack-dev-server.
Considero que é uma ferramenta que funciona bem com o script de build, me dando maior agilidade ao desenvolver.

### Arquitetura

Para a organização dos arquivos de estilo eu utilizei o recomendado na documentação do Sass: pattern 7-1 (https://sass-guidelin.es/#the-7-1-pattern).


### Convenção de nomes

Utilizei dois padrões que pra mim funcionam muito bem juntos:
BEM e o Namespace. Assim tanto ao ler o HTML ou então apenas o CSS, é possível ter uma ideia de quais e como os elementos são e como estão representados.


### Perfomance


No caso do bundle dos arquivos, utilizei o plugin MiniCssExtractPlugin para separar o css em um arquivo a parte. Essa decisão foi tomada pensando na perfomance do site, já que uma requisição a parte seria feita para obter o estilo, mantendo o arquivo js principal mais leve.

Na versão para dispositivos móveis as imagens não aparecem. 
Sendo assim, menos arquivos a serem entregues nesses casos, já que normalmente dispositivos móveis utilizam conexões mais lentas.

Comprimi a imagem do banner e converti as imagens de relógio e balões para SVG por serem bem mais leves que o PNG. Além de ter uma maior
flexibilidade em relação a responsividade ou animações.

Para o envio dos dados do formulário, optei pelo uso da Fetch API pois em comparação ao Axios ela demonstrou-se mais rápida (além de ter algo a menos como dependência) e em comparação ao XMLHTTPRequest, mais simples.

### Consistência

No quesito consistência, utilizei os mesmos espaçamentos para diferentes componentes.
Além de criar variáveis de cores e o map de tipografias.



Através deste teste demonstrei o máximo dos meus conhecimentos que o tempo e o escopo do teste me permitiram demonstrar.
Espero que eu tenha entregue um teste satisfatório e que eu possa avançar para a próxima fase. 

De qualquer forma, muito obrigado pela oportunidade, pude aprender algumas técnicas novas através do teste e que com certeza utilizei em projetos futuros.

