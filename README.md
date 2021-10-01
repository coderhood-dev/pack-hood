# 📦 pack-hood 📦

**pack-hood es una simple aplicacion del lado del servidor diseñada para la academia de Coderhood.**

El fin de esta aplicacion es darle a los estudiantes de la academia una herramienta para aprender a utilizar una API de forma sencilla.

- [📦 pack-hood 📦](#-pack-hood-)
  - [Sobre pack-hood](#sobre-pack-hood)
    - [Tipos de usuarios:](#tipos-de-usuarios)
    - [Paquetes:](#paquetes)
  - [Instalacion](#instalacion)
  - [Ficha tecnica](#ficha-tecnica)

- [Instalacion](#instalacion)

- [Documentacion de la API](./API.md)

- [Ficha tecnica](#ficha-tecnica)

***

## Sobre pack-hood

**pack-hood** es una empresa de logistica ficticia que busca resolver el envio de productos de terceros a sus clientes.

### Tipos de usuarios:
En pack-hood existen dos tipos de usuarios:
- **Operadores:** <br/>
Los operadores son los encargados de gestionar los envios de productos, estos se ubican en los puntos de deposito de paquetes. Los operadores crean, modifician, eliminan y consultan los envios de productos. Ellos son la primera persona que interactua con el cliente que quiere utilizar los servicios de pack-hood.

- **Operadores Administradores:** <br/>
Los Operadores Administradores son los encargados de gestionar los usuarios de la aplicacion, los Operadores Administradores pueden crear, modificar, eliminar y consultar los usuarios de la aplicacion.


### Paquetes:
En pack-hood los paquetes tienen una serie de atributos.

- **ID:** <br/>
  El ID es un identificador unico para cada paquete, usualmente un numero.

- **Estado**: <br/>
El estado del paquete puede ser:
  - **En deposito**: <br/>
  El paquete esta en el deposito de paquetes, es el primer estado y se setea al crear el paquete.
  - **En viaje**: <br/>
  El paquete esta en viaje a destino, es el segundo estado y se setea cuando el Operador le entrega el paquete al personal de logistica.
  - **Entregado**: <br/>
  El paquete esta entregado, es un estado final y se setea cuando el personal de logistica le entrega el paquete al cliente final.
  - **Cancelado**: <br/>
  El paquete esta cancelado, es un estado final y se setea cuando el Operador, o el Operador Administrador, el personal de logistica o el cliente final cancela el paquete. El proceso de cancelacion requiere que el paquete vuelva al deposito y sea retirado por el remitente.

- **Tamaño**: <br/>
El tamaño del paquete puede ser:
  - **Chico**: <br/>
  El paquete es chico, es una medida adecuada para el personal de logisitica que utiliza bicis o motos.
  
  - **Mediano**: <br/>
  El paquete es de mediano tamaño, es una medida adecuada para el personal de logistica que utiliza motos (pudiendo llevar un solo paquete a la vez) o autos.

  - **Grande**: <br/>
  El paquete es considerable tamaño, es una medida adecuada para el personal de logistica que utiliza autos o camionetas.

- **Contenido**: <br/>
  El contenido del paquete es un texto breve que describe el contenido del paquete. (Ej. "Microchips", "Celular" etc.)

- **Direccion de envio**: <br/>
  El destino del paquete es texto indicando la direccion donde debe ser enviado el paquete.

- **Nombre del destinatario**: <br/>
  Nombre completo de quien recibe el paquete.

- **Celular del destinatario**: <br/>
  Celular del destinatario del paquete, incluyendo el codigo de area.

***

## Instalacion

- **Requerimientos**
   - [Node.js](https://nodejs.org/en/)
   - [GIT](https://git-scm.com/) (opcional)
   - [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

**Abrimos la terminal en donde querramos instalar el proyecto**

1. **Clonar el repositorio**
   ```
    git clone
   ```

2. **Acceder a la carpeta de pack-hood**
    ```
    cd pack-hood
    ```

3. **Instalar dependencias**
   ```
    npm install
   ```
   o, en el caso de **yarn**
   ```
    yarn install
   ```

4. **Configurar el puerto de la aplicacion**
   
   Por defecto el puerto de la aplicacion es el **5000**, pero podemos cambiarlo en el archivo [config.js](config/index.js).
    ```js
    const CONFIG = {
        PORT: '5000', // <-- Cambiar el puerto
        JWT_SECRET: 'coderhood2021',
    };

    module.exports = CONFIG;
    ```

5. **Ejecutar la aplicacion**
   ```
    npm dev
   ```
   o, en el caso de **yarn**
   ```
    yarn dev
   ```

***

## Ficha tecnica

pack-hood esta desarrollado en Node.js, con el framework Express.js, con una base de datos en memoria.

**La idea de pack-hood es que sea sencilla de instalar y utilizar, por eso no se involucra una base de datos real en la aplicacion.**

Coderhood siempre fue, y va a ser gratis.

Agradeceriamos que colabores con la evolucion de pack-hood!