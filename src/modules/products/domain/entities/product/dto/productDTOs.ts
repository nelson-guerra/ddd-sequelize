export interface CreateProductDTO {
   name: string;
   price: number;
   description: string;
   image: string;
}

export interface UpdateProductDTO {
   name: string;
   price: number;
   description: string;
   image: string;
}

export interface ResponseProductDTO {
   id: string;
   name: string;
   price: number;
   description: string;
   image: string;
}
