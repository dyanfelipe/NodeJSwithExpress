# NodeJSwithExpress

### Mastering Nodejs

<p>
Structure to facilitate Unit Testing, Functional Testing, Integration. It is not necessary to start the tests using port 3100 to perform the tests in <strong> app.js </strong> using the server.</p>

### Using simtax ES7

<p>Using ES6 JavaScript.</p>

```
yarn add sucrase
```

<p>Create a new file <strong> nodemon.js </strong> Then register the sucrase as follows. We are saying that every file with extension <strong> JS </strong> will run with node and make a record in sucrase.</p>

```javascript
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}

```

<p>To debug it is necessary to make some changes.</p>
<strong>package.json</strong>.

```javascript
  "scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
```

<p>If using vscode use the following configuration.</p>
<p><strong>launch.json</strong> Just remember that the file can be accessed by vscode debugging.</p>

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

<p>For debug, restart every time with some change and only pass the following property.</p>

```javascript
"restart": true,
```

after changes in debugging, run the command
```
yarn dev:debug
```
# Eslint

add eslint as development dependency

```javascript# Eslint
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

generate a hash in the password register

```
 yarn add bcryptjs
```

To generate a JWT token authentication add the following instance

```
yarn add jsonwebtoken
```

library to validate (schema validation)

***Yup is a JavaScript schema builder for value parsing and validation***

```
yarn add yup
```
# Upload file
let's go use  format multipart/form-data to upload in files
```
yarn add multer
```
using library to deal with date
```
yarn add date-fns@next
```
