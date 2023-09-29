import { useState } from "react";

export const Product = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="fw-semibold mb-3">Registrar Producto 📝</h2>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Codigo Producto:</label>
              <input type="text" className="form-control w-75" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre Producto:</label>
              <input type="text" className="form-control w-75" />
            </div>
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                id="exampleCheck1"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Activo
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col">
          <h2 className="fw-semibold mb-3">Lista de Productos 🗃️</h2>
        </div>
      </div>
    </div>
  );
};
