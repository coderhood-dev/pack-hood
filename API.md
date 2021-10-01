## **API pack-hood**

- **Enums:**
  - [Obtener roles](#Obtener-roles)
  - [Obtener tamaños](#Obtener-tamaños)
  - [Obtener estados](#Obtener-estados)
- **Paquetes:**
  - [Crear](#Crear-un-paquete)
  - [Obtener todos](#Obtener-todos-los-paquetes)
  - [Obtener por ID](#Obtener-un-paquete-por-ID)
  - [Actualizar](#Actualizar-un-paquete)
  - [Eliminar](#Eliminar-un-paquete)
- **Operadores:**
  - [Crear](#Crear-un-operador)
  - [Obtener todos](#Obtener-todos-los-operadores)
  - [Obtener por ID](#Obtener-un-operador-por-ID)
  - [Actualizar](#Actualizar-un-operador)
  - [Eliminar](#Eliminar-un-operador)

***

## **Obtener roles**

Devuelve una lista con los roles disponibles.

- **URL**

  /packages/roles

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    [
        {
            id: 1,
            description: 'Operador',
        },
        {
            id: 2,
            description: 'Operador Administrador',
        },
    ]
    ```
***

## **Obtener tamaños**

Devuelve una lista con los tamaños de paquetes disponibles.

- **URL**

  /packages/sizes

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    [
        {
            id: 1,
            description: 'Chico',
        },
        {
            id: 2,
            description: 'Mediano',
        },
        {
            id: 3,
            description: 'Grande',
        },
    ]
    ```

***

## **Obtener estados**

Devuelve una lista con los estados de paquetes disponibles.

- **URL**

  /packages/statuses

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    [
        {
            id: 1,
            description: 'En deposito',
        },
        {
            id: 2,
            description: 'En viaje',
        },
        {
            id: 3,
            description: 'Entregado',
        },
        {
            id: 3,
            description: 'Cancelado',
        },
    ]
    ```

***

## **Crear un paquete**

Crea un paquete enviando los datos necesarios.

- **URL**

  /packages

- **Method:**

  `POST`

- **Request Body:**
  ```
    {
        "content": String (required),
        "address": String (required),
        "size": Integer (required),
        "status": Integer (required),
        "recipientName": String (required),
        "recipientPhone": String (required)
    }

  ```

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    ```
    {
        "id": 592336382,
        "content": "Apples",
        "address": "Santillan 420",
        "size": 2,
        "status": 1,
        "recipientName": "Bautista Di Santo",
        "recipientPhone": "319 56899039"
    }
    ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
    * `{ error: true, message: 'Missing fields' }`
    * `{ error: true, message: 'Invalid size or status' }`

***

## **Obtener todos los paquetes**

Retorna una lista con todos los paquetes.

- **URL**

  /packages

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
            "id": 416862719,
            "content": "Microchips",
            "address": "Calle walabi 42 sidney",
            "size": 1,
            "status": 1,
            "recipientName": "Jose Valbanera",
            "recipientPhone": "2956 1312390"
        },
        {
            "id": 592336382,
            "content": "Apples",
            "address": "Santillan 420",
            "size": 2,
            "status": 1,
            "recipientName": "Bautista Di Santo",
            "recipientPhone": "319 56899039"
        },
        ...etc
    ]
    ```

***

## **Obtener un paquete por ID**

Retorna un solo paquete por su ID.

- **URL**

  /packages/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 592336382,
        "content": "Apples",
        "address": "Santillan 420",
        "size": 2,
        "status": 1,
        "recipientName": "Bautista Di Santo",
        "recipientPhone": "319 56899039"
    },
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Package not found' }`

***

## **Actualizar un paquete**

Actualiza un paquete por su ID.

- **URL**

  /packages/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `PUT`

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    ```
    {
        "id": 592336382,
        "content": "Oranges",
        "address": "Santillan 420",
        "size": 2,
        "status": 1,
        "recipientName": "Bautista Di Santo",
        "recipientPhone": "319 56899039"
    },
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Package not found' }`

***

## **Eliminar un paquete**

Elimina un paquete por su ID.

- **URL**

  /packages/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `DELETE`

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    `{ error: false, message: 'Paquete eliminado' }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Package not found' }`
  
***

## **Crear un operador**

Crea un operador enviando los datos necesarios.

- **URL**

  /operators

- **Method:**

  `POST`

- **Request Body:**
  ```
    {
        "name": String (required),
        "password": String (required),
        "cellphone": String (required),
        "email": String (required),
        "role": Integer (required)
    }
  ```

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    ```json
    {
        "id": 022,
        "name":"Pablo Miceli",
        "password":"essecreta123",
        "cellphone":"341 12354123",
        "email": "pablitoclavounclavito@gmail.com",
        "role": 2
    }
    ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
    * `{ error: true, message: 'Missing fields' }`
    * `{ error: true, message: 'Invalid role' }`
    * `{ error: true, message: 'Email already exists' }`

***

## **Obtener todos los operadores**

Retorna una lista con todos los operadores.

- **URL**

  /operators

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** 
    ```json
    [
        {
            "id": 206,
            "name": "El Tono",
            "cellphone": "490 1323420",
            "email": "tonotono@tono.com",
            "role": 1,
        },
        {    
            "id": 022,
            "name":"Pablo Miceli",
            "cellphone":"341 12354123",
            "email": "pablitoclavounclavito@gmail.com",
            "role": 2
        },
    ]
    ```

***

## **Obtener un operador por ID**

Retorna un solo operador por su ID.

- **URL**

  /operators/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "id": 206,
        "name": "El Tono",
        "cellphone": "490 1323420",
        "email": "tonotono@tono.com",
        "role": 1,
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Operator not found' }`

***

## **Actualizar un operador**

Actualiza un operador por su ID.

- **URL**

  /operators/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `PUT`

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    ```json
    {
        "id": 206,
        "name": "El Tono Tono",
        "cellphone": "490 1323420",
        "password": "minuevapasswordsecreta123",
        "email": "tonotono@tono.com",
        "role": 1,
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Operator not found' }`

***

## **Eliminar un operador**

Elimina un operador por su ID.

- **URL**

  /operators/:id

  
-  **URL Params**

   **Required:**
 
   `id=[Integer]`


- **Method:**

  `DELETE`

- **Success Response:**

  - **Code:** 202 <br />
    **Content:** 
    `{ error: false, message: 'Operador eliminado' }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    * `{ error: true, message: 'Operator not found' }`
