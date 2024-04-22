// 'use client';
import axios from "axios";

export async function getProducts() {
  const APIdesdeBackProducts = "http://localhost:5000/products";

  try {
    const response = await axios.get(APIdesdeBackProducts);
    return response.data;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}

export async function getUsersOrders(token:string) {
  const APIdesdeBackUsersOrders = "http://localhost:5000/users/orders";

  try {
    const response = await axios.get(APIdesdeBackUsersOrders, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}

export async function postOrders(productosParaBack:any, token:string) {
  const APIdesdeBackOrders = "http://localhost:5000/orders";

  try {
    const response = await axios.post(
      APIdesdeBackOrders,
      {
        products: productosParaBack,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Hubo un error al enviar los datos:", error);
  }
}

export async function postUsersLogin(email:string, password:string) {
  const APIdesdeBackUsersLogin = "http://localhost:5000/users/login";

  try {
    const response = await axios.post(APIdesdeBackUsersLogin, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}


export async function postUsersRegister(userData:any) {
  const APIdesdeBackUsersRegister = "http://localhost:5000/users/register";
  try {
    const response = await axios.post(APIdesdeBackUsersRegister, userData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
}


//! Otra forma de hacerlo pero me siento más comodo con try-catch.
// const APIdesdeBack = "http://localhost:5000/products";

// const nuevaFuncion = async () => {
//   return axios
//     .get(APIdesdeBack)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.error("Hubo un error al obtener los datos:", error);
//     });
// };
// const items = await nuevaFuncion();
