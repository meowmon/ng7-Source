export class user {
    id:number;
    firstName:string;
    lastName:string;
    userName:string;
    password:string;
    phone:number;
    birthday:string;
    gender:string;
    country?:string;
    email:string; 
  };
export interface UserResponse{
    id:number;
    firstName:string;
    lastName:string;
    userName:string;
    password:string;
    phone:number;
    birthday:string;
    gender:string;
    country?:string;
    email:string; 
}