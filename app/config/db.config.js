module.exports = {
    HOST: "localhost",
    USER: "matus",
    PASSWORD: "Kubyajp",
    DB: "easyblog",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };