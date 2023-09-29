import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../context/Context";

export const Home = () => {
  const { client, product, createSale } = useContext(ApiContext);
  const [fecha, setFecha] = useState();
  const [name, setName] = useState("Nombre del Cliente");
  const [codigo, setCodigo] = useState();
  const onChangeHandler = (event) => {
    setName(event.target.value);
  };
  const onClickHandler = () => {
    const clienteEncontrado = client.find(
      (cliente) => cliente.CodCliente === codigo
    );
    if (clienteEncontrado) {
      setName(clienteEncontrado.NomCliente);
    } else {
      setName("Cliente no encontrado");
    }
  };
  const [products, setProducts] = useState([]);
  const [namePro, setNamePro] = useState("Nombre del Producto");
  const [codigoPro, setCodigoPro] = useState();
  const [amountPro, setAmountPro] = useState();
  const [unitVlPro, setUnitVlPro] = useState();
  const onChangeHandlerPro = (event) => {
    setNamePro(event.target.value);
  };
  const onClickHandlerPro = () => {
    const productoEncontrado = product.find(
      (producto) => producto.CodProducto === codigoPro
    );
    if (productoEncontrado) {
      setNamePro(productoEncontrado.NomProducto);
    } else {
      setNamePro("Producto no encontrado");
    }
  };
  const addItemPro = () => {
    let amount = parseFloat(amountPro);
    let unit = parseFloat(unitVlPro);
    const newItem = {
      codProducto: codigoPro,
      nomProducto: namePro,
      cantidad: amountPro,
      valorUnitario: unitVlPro,
      valorTotal: amount * unit,
    };
    const newProducts = [...products, newItem];
    setProducts(newProducts);
    setNamePro("Nombre del Producto");
    setCodigoPro("");
    setAmountPro("");
    setUnitVlPro("");
  };
  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    if (index >= 0 && index < updatedProducts.length) {
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };
  const handleCreateSale = () => {
    if (!fecha || !codigo) {
      alert("Debes indicar una fecha y un usuario");
      window.location.reload();
    }
    products.map(async (product) => {
      await createSale({
        fecha: fecha,
        codProducto: product.codProducto,
        codCliente: codigo,
        cantidad: product.cantidad,
        valorUnitario: product.valorUnitario,
        valorTotal: product.valorTotal,
      });
    });
    return true;
  };
  return (
    <div className="container">
      <h1 className="fw-semibold">Ventas 💰</h1>
      <div className="row">
        <div className="col mb-3">
          <label className="form-label fw-semibold">Fecha:</label>
          <div className="input">
            <input
              type="date"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label fw-semibold">Código Cliente:</label>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control me-2"
              aria-describedby="button-addon2"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={onClickHandler}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="col-6 mb-3">
          <label className="form-label fw-semibold">Nombre Cliente:</label>
          <div className="input">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={name}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-success mb-2 ms-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Grabar
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2 ms-2"
            onClick={addItemPro}
          >
            Agregar Item
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    ¿Estas segur@ de Grabar (Guardar) tu venta 🤔?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    No, aún no... ⛔
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleCreateSale}
                    data-bs-dismiss="modal"
                  >
                    Sí, estoy seguro... ✅
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <label className="form-label fw-semibold">Código Producto:</label>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control me-2"
              aria-describedby="button-addon2"
              value={codigoPro}
              onChange={(e) => setCodigoPro(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={onClickHandlerPro}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="col-5 mb-3">
          <label className="form-label fw-semibold">Nombre Producto:</label>
          <div className="input">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={namePro}
              onChange={onChangeHandlerPro}
            />
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label fw-semibold">Cantidad:</label>
          <div className="input">
            <input
              type="number"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={amountPro}
              onChange={(e) => setAmountPro(e.target.value)}
            />
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label fw-semibold">Valor Unitario:</label>
          <div className="input">
            <input
              type="number"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={unitVlPro}
              onChange={(e) => setUnitVlPro(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label className="form-label fw-semibold">Codigo Producto:</label>
        </div>
        <div className="col">
          <label className="form-label fw-semibold">Nombre Producto:</label>
        </div>
        <div className="col">
          <label className="form-label fw-semibold">Cantidad:</label>
        </div>
        <div className="col">
          <label className="form-label fw-semibold">Valor Unitario:</label>
        </div>
        <div className="col">
          <label className="form-label fw-semibold">Valor Total:</label>
        </div>
        <div className="col">
          <label className="form-label fw-semibold">Eliminar Item</label>
        </div>
      </div>
      {products.map((producto, index) => (
        <div className="row" key={index}>
          <div className="col d-flex align-items-center">
            <div>{producto.codProducto}</div>
          </div>
          <div className="col d-flex align-items-center">
            <div>{producto.nomProducto}</div>
          </div>
          <div className="col d-flex align-items-center">
            <div>{producto.cantidad}</div>
          </div>
          <div className="col d-flex align-items-center">
            <div>{producto.valorUnitario}</div>
          </div>
          <div className="col d-flex align-items-center">
            <div>{producto.valorTotal}</div>
          </div>
          <div className="col">
            <div>
              <button
                className="btn fs-4 ms-4 p-0"
                type="button"
                onClick={() => handleDeleteProduct(index)}
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
