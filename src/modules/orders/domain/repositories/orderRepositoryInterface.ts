import { Order } from '../entities/order/order';

export interface OrderRepositoryInterface {
   getOrderById: (id: string) => Promise<Order | null>;
   getOrdersByUser: (id: string) => Promise<Order[] | null>;
   save: (order: Order) => Promise<boolean>;
}
