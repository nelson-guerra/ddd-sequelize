import express from 'express';
import { createOrderController } from '../../application/useCases/createOrder';
import { getOrderByUserController } from '../../application/useCases/getOrderByUser';

const orderRouter = express.Router();

orderRouter.post('/orders', (req, res, next) => createOrderController.execute(req, res, next));
orderRouter.get('/orders/user/:id', (req, res, next) => getOrderByUserController.execute(req, res, next));

export { orderRouter };
