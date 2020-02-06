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
