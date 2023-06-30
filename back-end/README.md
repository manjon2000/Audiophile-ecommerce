

Instalar express

``` bash
$ npm i express morgan cors
```

Instalar como desarrollo ``typescript`` 

``` bash
$ npm i typescript -D
```

Inicializar tsc

``` bash
$ npx tsc --init
```
Utilizamos npx por que ``tsc`` no esta instalado globalmente, si no en el proyecto inicializado.

Esto creara un archivo tsconfig.json, a continuacion habilitaremos algúnas opaciones de typescript.

Buscamos el atributo **``rootDir``** y cambiamos el valor por nuestra ruta que contiene el archivo que enciende el proyecto, por ejemplo **``'./src'``**.

Buscamos el atributo **``outDir``**, tiene como mision añadir los archivos compilados a la ruta descrita,``'./dist'``

Para compilar el proyecto, debemos escribir este comando por consola o terminal:

``` bash
$ npx tsc
```

El comando creara la compilacion de typescript a javascript en la carpeta descrita en la configuracion de typescript, dicho nombre es el siguiente, ``outDir``.


Instalar tsc-node-dev y lo requerimos como dependecia de desarollo, mas informacion sobre la libreria, [Saber mas informacion](https://www.npmjs.com/package/ts-node-dev)

``` bash
$ npm i ts-node-dev -D
```
Lo siguiente es configurar el archivo, ``package.json`` con los siguientes parametros:

``` json
scripts: {
	"dev": "ts-node-dev --respawn srsc/index.ts"
}
```


Instalar los tipos de datos de **express**, **morgan** y por ultimo **core**:

``` bash
$ npm i @types/express -D
```

``` bash
$ npm i @types/morgan -D
```

``` bash
$ npm i @types/cors -D
```


Inicializamos express:

``` js
import express from 'express'

const app = express()

app.listen(4000)
```


Inicializamos morgan:

``` js
import morgan from 'morgan'

app.use(morgan('dev'))
```


Inicializamos cors:

``` js
import cors from 'cors'

app.use(cors())
```


Para mas informacion sobre las bibliotecas mecionadas anteriormente, piche en los enlaces siguientes:

-  [Express]([Instalación de Express (expressjs.com)](https://expressjs.com/es/starter/installing.html))
-  [Morgan]([morgan - npm (npmjs.com)](https://www.npmjs.com/package/morgan))
-  [Cors]([cors - npm (npmjs.com)](https://www.npmjs.com/package/cors))


Instalamos **typeorm** para mas informacion [Pincha aqui](https://typeorm.io/):


``` bash
$ npm i typeorm --save
```

si obtenemos un error de conflicto con la dependencia typeorm, insertaremos la siguiente  linea de comando por consola o terminal, sirve para reparar el error:

``` bash
$ npm i typeorm --legacy-peer-deps
```

Instalar reflect-metadata:

``` bash
$ npm i reflect-metadata --save
```
En nuestro archivo indice importamos en primer lugar **reflect-metadata**:
``` js
import "reflect-metadata"
```

``` bash
$ npm i @types/node --save-dev
```


Instalar driver de base de datos, nosotros vamos a instalar **mysql**, pero podemos obtener mas base de datos [Pincha aqui.](https://typeorm.io/#installation)

``` bash
$ npm i mysql2 --save
```

Añadir o descomentar configuracion de typescript, ``tsconfig.json`` con los siguientes parametros:

``` json
{
	//...
	"emitDecoratorMetadata": true, 
	"experimentalDecorators": true,
}
```
tambien nos tenemos que asegúrar de que estamos utilizando una version de typescript **4.5 o superior**.




creamos un archivo donde crearemos la instancia de typeorm para conectarnos a la base de datos:

``` js
import { DataSource } from 'typeorm'
import { User } from './domain/entities/User'

export const AppDataSource = new DataSource({

	type: 'mysql2',
	host: 'localhost',
	port: 3306,
	username: 'YOU_USERNAME',
	password: 'YOU_PASSWORD',
	database: 'YOU_DATABASE_NAME',
	synchronize: true,
	logging: true, // Debug terminal
	entities: ['YOU_ENTITIES', User],
	subscribers: [],
	migrations: [],
})
```
