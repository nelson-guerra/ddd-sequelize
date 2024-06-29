import express from 'express';
import { productRouter } from '../modules/products/infrastructure/routes';
import { userRouter } from '../modules/users/infrastructure/routes';
import { orderRouter } from '../modules/orders/infrastructure/routes';

const v1Router = express.Router();

v1Router.use('/', productRouter);
v1Router.use('/', userRouter);
v1Router.use('/', orderRouter);

export { v1Router };
