const URL_API = "http://localhost:8001/api";

// Create Product
export const createProduct = async ({ codProducto, nomProducto, activo }) => {
  try {
    const url = `${URL_API}/product/`;
    const data = {
      codProducto: codProducto,
      nomProducto: nomProducto,
      activo: activo,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status === 201) {
      return 201;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// Get Products
export const getProducts = async () => {
  try {
    const url = `${URL_API}/product`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      return JSON.stringify(await response.json());
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// Update Product
export const updateProduct = async ({
  codProducto,
  nomProducto,
  activo,
  productoId,
}) => {
  try {
    const url = `${URL_API}/product/${productoId}`;
    const data = {};
    if (codProducto) {
      data.codProducto = codProducto;
    }
    if (nomProducto) {
      data.nomProducto = nomProducto;
    }
    if (activo) {
      data.activo = activo;
    }
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      return 200;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// Delete Product
export const deleteProduct = async (productoId) => {
  try {
    const url = `${URL_API}/product/${productoId}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      return 200;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
