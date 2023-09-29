import { createContext, useState, useEffect } from "react";
import {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} from "../controllers/Client.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";
import { createSale, getSales } from "../controllers/Sale.js";
import PropTypes from "prop-types";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [client, setClient] = useState();
  const [product, setProduct] = useState();
  const [sale, setSale] = useState();
  const [publish, setPublish] = useState(false);

  useEffect(() => {
    (async () => {
      const resClient = await getClients();
      const resConvertClient = JSON.parse(resClient);
      setClient(resConvertClient);

      const resProduct = await getProducts();
      const resConvertProduct = JSON.parse(resProduct);
      setProduct(resConvertProduct);

      const resSale = await getSales();
      const resConvertSale = JSON.parse(resSale);
      setSale(resConvertSale);

      setPublish(false);
    })();
  }, [publish]);
  return (
    <ApiContext.Provider
      value={{
        client,
        product,
        sale,
        setPublish,
        createClient,
        updateClient,
        deleteClient,
        createProduct,
        updateProduct,
        deleteProduct,
        createSale,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
