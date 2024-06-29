import express from 'express';
import { createUserController } from '../../application/useCases/createUser';
import { createUserAddressController } from '../../application/useCases/createUserAddress';
import { getUserByController } from '../../application/useCases/getUserById';

const userRouter = express.Router();

userRouter.post('/users', (req, res, next) => createUserController.execute(req, res, next));
userRouter.post('/users/address', (req, res, next) => createUserAddressController.execute(req, res, next));
userRouter.get('/users/:id', (req, res, next) => getUserByController.execute(req, res, next));

export { userRouter };
