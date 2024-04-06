//* "d" significa datatypes porque declaro los tipos de datos que tendra mi aplicacion. es decir
//*puedo crear interfaces

//* Acá hago una interface para tener referencia de mis variables traidas del back

export interface IProduct{
    id: number, // 1,
    name: string, // "iPhone 11",
    description: string, // "Experience power ....
    price: number, // 699,
    stock: number, // 10,
    image: string, // "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    categoryId: number // 1
}
export interface ICategory{
    id: number, // 1,
    name: string, // "Smartphones",
    image: string, // "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png"
}

export interface IOrderUser{
    id : number, // 1,
    name: string, // "Simonf",
    email: string, // "
    address: string, // "georgst",
    phone: string, // "0123456789",  
    role: 'admin'| 'user', // "user",
    // orders: IOrderUser[], // [{}]
}

export interface IOrder{
    id: number, // 1,
    status: 'approved' | 'pending' | 'rejected', // 'approved',
    date: string, // "2021-09-01T00:00:00.000Z",
    // user: IUser, // {},
    products: IProduct[], // [{}],
}


export interface IUser{
    email: string, // "simonf@mail.com",
    password: string, // "123456",
    name: string, // "Simonf",
    address: string, // "georgst",
    phone: string, // "0123456789",
}

export interface IProfile{
    email: string, // "Simonf@mail.com",
    password: string, // "0123456789",
}
