const URL_API = "http://localhost:8001/api";

// Create Sale
export const createSale = async ({
  fecha,
  codProducto,
  codCliente,
  cantidad,
  valorUnitario,
  valorTotal,
}) => {
  try {
    const url = `${URL_API}/sale/`;
    const data = {
      fecha: fecha,
      codProducto: codProducto,
      codCliente: codCliente,
      cantidad: cantidad,
      valorUnitario: valorUnitario,
      valorTotal: valorTotal,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    console.log(await response.json())
    if (response.status === 201) {
      return 201;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// Get Sales
export const getSales = async () => {
  try {
    const url = `${URL_API}/sale`;
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
