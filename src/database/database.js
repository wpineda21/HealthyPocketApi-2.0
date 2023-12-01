import Sequelize from "sequelize";
/*
export const sequelize = new Sequelize(
  "defaultdb", // db name,
  "doadmin", // username
  "AVNS_dCh8VMyN9MsN3gticu6", // password
  {
    host: "db-healthy-pocket-do-user-14279557-0.b.db.ondigitalocean.com",
    dialect: "postgres",
    port:25060,
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false,
      },
    }
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});*/

export const sequelize = new Sequelize(
  "ProyectoM", // Cambia el nombre de la base de datos a "apiproyect2"
  "postgres", // Cambia "tu_usuario_de_la_base_de_datos" por tu nombre de usuario de la base de datos
  "1234", // Cambia "tu_contraseña_de_la_base_de_datos" por tu contraseña de la base de datos
  {
    host: "localhost", // Cambia el host a "localhost" para la conexión a una base de datos local
    dialect: "postgres", // Asegúrate de que el dialecto sea "postgres" si estás utilizando PostgreSQL
    port: 5432, // Cambia el puerto al puerto predeterminado de PostgreSQL (5432)
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });