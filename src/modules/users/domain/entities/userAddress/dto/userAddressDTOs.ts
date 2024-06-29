export interface CreateUserAddressDTO {
   user_id: string;
   city: string;
   address: string;
   zip: string;
   contact_name: string;
   contact_phone: string;
}

export interface ResponseUserAddressDTO {
   id: string;
   user_id: string;
   city: string;
   address: string;
   zip: string;
   contact_name: string;
   contact_phone: string;
}
