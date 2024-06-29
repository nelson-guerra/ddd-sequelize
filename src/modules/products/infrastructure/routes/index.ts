import express from 'express';
import { createProductController } from '../../application/useCases/createProduct';
import { updateProductController } from '../../application/useCases/updateProduct';
import { getAllProductsController } from '../../application/useCases/getAllProducts';
import { getProductByIdController } from '../../application/useCases/getProductById';
import { deleteProductController } from '../../application/useCases/deleteProduct';

const productRouter = express.Router();

productRouter.post('/products', (req, res, next) => createProductController.execute(req, res, next));
productRouter.get('/products', (req, res, next) => getAllProductsController.execute(req, res, next));
productRouter.get('/products/:id', (req, res, next) => getProductByIdController.execute(req, res, next));
productRouter.put('/products/:id', (req, res, next) => updateProductController.execute(req, res, next));
productRouter.delete('/products/:id', (req, res, next) => deleteProductController.execute(req, res, next));

export { productRouter };
