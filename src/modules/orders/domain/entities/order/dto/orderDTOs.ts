interface Items {
   product_id: string;
   quantity: number;
   price: number;
}

export interface CreateOrderDTO {
   user_id: string;
   address_id: string;
   items: Items[];
}

export interface ResponseOrderDTO {
   id: string;
   no: string;
   user_id: string;
   status: string;
   address: string;
   items: Items[];
}
