// 'use client';
import axios from "axios";

export async function fetchProducts() {
  const APIdesdeBack = "http://localhost:5000/products";

  try {
    const response = await axios.get(APIdesdeBack);
    return response.data;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}

export async function getOrders(token) {
  const APIdesdeBackDos = "http://localhost:5000/users/orders";
  
  try {
    const response = await axios.get(APIdesdeBackDos, {
      headers: {
        Authorization: token,
      },
    })
    return response.data;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}


export async function funcionParaEnviarAlBackend(productosParaBack,token) {
  const APIdesdeBackTres = "http://localhost:5000/orders";

  try {
    const response =await axios.post(APIdesdeBackTres, {
      products: productosParaBack,
    }, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);
  }
  catch (error) {
    console.error("Hubo un error al enviar los datos:", error);
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
