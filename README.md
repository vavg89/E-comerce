**Proyecto E-commerce de Tecnología:**

Como parte de mi trayectoria como Full Stack Developer, integré junto a 5 increíbles compañeros un emocionante proyecto de E-commerce de tecnología.

**Características Clave:**

1. **Filtrado y Ordenamiento:** Implementamos un sistema de filtrado intuitivo que permite a los usuarios explorar productos por categoría y marca. Esto no solo simplifica la experiencia del usuario, sino que también facilita la búsqueda de productos específicos. También se integró ordenamiento por precio para mejor búsqueda de productos esperados.

2. **Tecnologías Utilizadas:**
   - **Frontend:** React, Bootstrap 5
   - **Backend:** Node.js, Express, Sequelize, PostgreSQL
   - **Comunicación Frontend-Backend:** Axios

3. **Arquitectura:** Desarrollamos una arquitectura sólida utilizando Express y Sequelize en el backend para garantizar un rendimiento y una seguridad óptimos. La base de datos PostgreSQL respalda la plataforma, lo que permite una gestión eficiente de productos y usuarios.

4. **Instalación Sencilla:** Para garantizar la accesibilidad, implementé un proceso de instalación claro. Con un simple `npm install` en las carpetas `client` y `server`, el proyecto se puede levantar sin problemas.

5. **Funcionalidad Confiable:** El proyecto fue probado exhaustivamente para asegurar su funcionalidad y confiabilidad. Los usuarios pueden navegar sin problemas, realizar búsquedas específicas y realizar compras de manera segura.

Este proyecto es un testimonio de mi dedicación junto con mis compañeros para utilizar tecnologías de vanguardia. Estoy orgulloso de este logro y espero seguir creando soluciones tecnológicas innovadoras en el futuro. Siéntete libre de contactarme para obtener más detalles sobre este proyecto o para discutir colaboraciones futuras, mi contacto está en la descripción de mi perfil.

Instalación de Dependencias:

Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, en la carpeta client, ejecuta el siguiente comando para instalar las dependencias:

`npm install` 

2. Inicio del Front:

Inicia el servidor de desarrollo con el siguiente comando:

`npm start` 

3. Datos .env:

VITE_MERCADO_PAGO_PUBLIC_KEY="TEST-77c820a7-513b-44a4-8b2d-01ea41494588"
VITE_POST_PAYMENT="http://localhost:3010/payments/generate"
VITE_POST_NEW_ORDER=http://localhost:3010/orders/create

## Pasos para Desplegar el Proyecto

A continuación, te proporciono un paso a paso detallado para desplegar tu proyecto de comercio electrónico utilizando Node.js 18.16 y PostgreSQL 15.3. Asegúrate de seguir estos pasos en orden:

1. Instalación de Dependencias:

Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, en la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:

`npm install` 

2. Configuración de la Base de Datos:

Crea una base de datos en PostgreSQL con el nombre "PFHenry" y configura las credenciales en un archivo .env siguiendo el siguiente formato:

DB_USER=mi_usuario DB_PASSWORD=mi_contraseña DB_HOST=mi_host 

3. Inicio del Servidor:

Inicia el servidor de desarrollo con el siguiente comando:

`npm start` 

4. Datos .env:

DB_USER=postgres
DB_PASSWORD=Minombre12
DB_HOST=localhost
JWT_KEY=Grupo7
ACCESS_TOKEN="TEST-6310559041386566-071820-2556cfd79c12b7ca5ed095500b899251-1338314230"
BACK_URL_SUCCESS="http://localhost:3001"
BACK_URL_FAILED="http://localhost3010/failed"
BACK_URL_PENDING="http://localhost3010/pending"

