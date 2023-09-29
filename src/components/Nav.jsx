import { Link } from "react-router-dom";
import business from "../assets/business.png";

export const Nav = () => {
  return (
    <nav className="shadow-lg mb-3" style={{ backgroundColor: "#222f3e" }}>
      <div className="navbar navbar-expand-lg container navbar-dark">
        <div className="container-fluid">
          <Link className="pb-2" to={"/"}>
            <img
              src={business}
              style={{ height: "50px" }}
              className="navbar-brand"
            />
          </Link>
          <button
            style={{ marginTop: "-9px" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginTop: "-5px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/"}
                >
                  Ventas
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/products"}
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/clients"}
                >
                  Clientes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/sales"}
                >
                  Registro de Ventas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
