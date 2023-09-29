const URL_API = "http://localhost:8001/api";

// Create Client
export const createClient = async ({ codCliente, nomCliente, ciudad }) => {
  try {
    const url = `${URL_API}/client/`;
    const data = {
      codCliente: codCliente,
      nomCliente: nomCliente,
      ciudad: ciudad,
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

// Get Clients
export const getClients = async () => {
  try {
    const url = `${URL_API}/client/`;
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

// Update Client
export const updateClient = async ({
  codCliente,
  nomCliente,
  ciudad,
  clienteId,
}) => {
  try {
    const url = `${URL_API}/client/${clienteId}`;
    const data = {};
    if (codCliente) {
      data.codCliente = codCliente;
    }
    if (nomCliente) {
      data.nomCliente = nomCliente;
    }
    if (ciudad) {
      data.ciudad = ciudad;
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

// Delete Client
export const deleteClient = async (clienteId) => {
  try {
    const url = `${URL_API}/client/${clienteId}`;
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
