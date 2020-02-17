# NodeJSwithExpress

### Mastering Nodejs

<p>
Estrutura para facilitar em Teste Unitários, Funcional, Integração. Não e necessário iniciar os teste utilizando a porta 3100 realizer os teste no <strong>app.js</strong> utilizando o server.</p>

### Using simtax ES7

<p>Usando ES6 JavaScript.</p>

```
yarn add sucrase
```

<p>Crie um arquivo novo arquivo <strong>nodemon.js</strong> Em seguida registre o sucrase da seguinte forma. Estamos falando que todo arquivo com extensão <strong>JS</strong> vai rodar com node e fazer um registro no sucrase.</p>

```javascript
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}

```

<p>Para fazer debug é necessário fazer algumas alterações.</p>
<strong>package.json</strong>.

```javascript
  "scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
```

<p>Se estiver usando o vscode use a seguinte configuração.</p>
<p><strong>launch.json</strong> Só lembre que o arquivo pode ser acessado pelo debug do vscode.</p>

```javascript
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "protocol": "inspector"
    }
  ]
```

<p>Para o debug reiniciar toda vez com alguma alteração e só passa a seguinte propriedade.</p>

```javascript
"restart": true,
```

# Eslint

add eslint as development dependency

```javascript
yarn add eslint -D
```

start the eslint

```javascript
yarn eslint --init
```

select the desired option. I selected the following options

```javascript
- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- You want to use TypeScript = No
- Select Nodejs
- Use populate style guide
- Select AirBnB
- Select JavaScript
```

I like to use the wire. However it already boots with **npm** just delete the generated file "packege-lock.json" and run **yarn**

Install Prettier

```javascript
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

change all files without needing to save it

```javascript
yarn eslint --fix nameFolder --ext extensão
```

# Sequelize

install sequelize

```javascript
yarn add sequelize
```

install sequelize-cli and command line interface

```javascript
yarn add sequelize-cli -D
```

https://sequelize.org/v5/manual/dialects.html#postgresql

```javascript
yarn add pg pg-hstore
```

Create migrations

```shell script
yarn sequelize migration:create --name=create=users
```

after creating the migrations and making the changes run the following commandafter

```shell script
yarn sequelize db:migrate
```

undo a migration change

```
yarn sequelize db:migrate:undo
```

or all

```shell script
yarn sequelize db:migrate:undo:all
```
