export interface User{
  phone_number: string;
  user_city:string
  reg_date:Date
  id:number
  name: string;
  email: string;
  password: string;
}


export interface GetUserByIdResponse {
  status: number,
  message: {
    email: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  }
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  status: number;
  user_id:number;
  message: string;
}

export interface RegisterUserPayload {
  name: string
  email: string
  phone_number: string
  password: string;
  user_city: string;
}

export interface RegisterUserResponse {
  status: number;
  message: string;
}

//post

export interface Post{
  main_text:string
  user_id:number
  id :number
  reg_date:string;
  user_fk:User
  photos:[{
    photo_id: number
    photo_url: string
  }]
  comments: []
}

export interface GetAllPostsResponse{
  status:number;
  message:Post[]
}

export interface GetPostByIdResponse{
  status:number
  message:Post
}