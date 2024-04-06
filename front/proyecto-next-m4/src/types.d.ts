//* "d" significa datatypes porque declaro los tipos de datos que tendra mi aplicacion. es decir
//*puedo crear interfaces





//* Acá hago una interface para tener referencia de mis variables traidas del back

export interface IProduct{
    "id": number, // 1,
    "name": string, // "iPhone 11",
    "description": string, // "Experience power ....
    "price": number, // 699,
    "stock": number, // 10,
    "image": string, // "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    "categoryId": number // 1
}

export interface IUserOrder{
    "id": number, // 1,
    "status": string, // "approved",
    "date": string, // "2021-06-01T00:00:00.000Z",
    "products": IProduct[], // [{}],
}

export interface ILogin{
    "email": string, // "simonf@mail.com",
    "password": string, // "hola123"
}

export interface IRegister{
    "email": string, // "simonf@mail.com",
    "password": string, // "hola123",
    "name": string, // "Simonf",
    "address": string, // "georgst",
    "phone": string, // "0123456789"
}

