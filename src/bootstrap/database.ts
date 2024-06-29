import { Sequelize } from 'sequelize-typescript';
import { dbCredentials } from '../shared/infrastructure/config';
import { IBootstrap, TInitialize } from './bootstrap.interface';

export class DatabaseBootstrap implements IBootstrap {
   public sequelize: Sequelize;

   constructor() {
      this.sequelize = new Sequelize({
         dialect: 'mysql',
         database: dbCredentials.database,
         host: dbCredentials.host,
         username: dbCredentials.username,
         password: dbCredentials.password,
         models: [dbCredentials.models],
         pool: {
            max: dbCredentials.pool.max,
            min: dbCredentials.pool.min,
            acquire: dbCredentials.pool.acquire,
            idle: dbCredentials.pool.idle,
         },
      });
   }

   async initialize(): Promise<TInitialize> {
      const promise = new Promise((resolve, reject) => {
         this.sequelize
            .authenticate()
            .then(() => {
               console.log('Connection to database has been established.');
               return this.sequelize.sync();
            })
            .then(() => {
               console.log('Models synchronized correctly');
               resolve(true);
            })
            .catch(err => {
               reject(err);
            });
      });

      return promise as Promise<boolean | Error>;
   }

   close() {
      this.sequelize.close();
   }
}
