import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { router } from './routes/';
import { genericError, pathNotFound } from './shared/infrastructure/http/errorHandler';

const app: Application = express();

const origin = {
   origin: '*',
};

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(origin));
app.use(compression());

app.use('/', router);

app.use(pathNotFound);
app.use(genericError);

export { app };
