// 'use client';
import axios from "axios";

export async function getProducts() {
  const APIdesdeBack = "http://localhost:5000/products";

  try {
    const response = await axios.get(APIdesdeBack);
    return response.data;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}

export async function getUsersOrders(token) {
  const APIdesdeBackDos = "http://localhost:5000/users/orders";

  try {
    const response = await axios.get(APIdesdeBackDos, {
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

export async function postOrders(productosParaBack, token) {
  const APIdesdeBackTres = "http://localhost:5000/orders";

  try {
    const response = await axios.post(
      APIdesdeBackTres,
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

export async function postUsersLogin(email, password) {
  const APIdesdeBackCuatro = "http://localhost:5000/users/login";

  try {
    const response = await axios.post(APIdesdeBackCuatro, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}


export async function postUsersRegister(userData) {
  try {
    const response = await axios.post(`http://localhost:5000/users/register`, userData);
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
