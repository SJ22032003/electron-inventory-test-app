const config = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "bsf_dev_db",
    port: Number(process.env.DB_PORT) || 3301,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};

export default config;
