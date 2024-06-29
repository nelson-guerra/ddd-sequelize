export interface CreateUserDTO {
   name: string;
   email: string;
   password: string;
}

interface Address {
   user_id: string;
   city: string;
   address: string;
   zip: string;
   contact_name: string;
   contact_phone: string;
}

export interface ResponseUserDTO {
   id: string;
   name: string;
   password: string;
   email: string;
   addreses: Address[];
}
