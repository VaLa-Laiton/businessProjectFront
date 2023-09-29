import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/clients" element={<Product />} />
        <Route path="/sales" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
