import path from 'path';

export const dbCredentials = {
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   models: path.join(__dirname, '../../../modules/**/infrastructure/implementations/entities/*.entity.{ts,js}'),
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
   },
};

export const serverParams = {
   port: Number(process.env.PORT),
};
