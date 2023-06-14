import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Produtos } from "./Pages/Produtos";
import { LoginAdm } from "./Pages/LoginAdm";
import { AdicionarProduto } from "./Pages/AdicionarProduto";
import axios from "axios";
import { EditarProduto } from "./Pages/EditarProduto";
import { AreaAdm } from "./Pages/AreaAdm";
import { Categorias } from "./Pages/Categorias";
import { AdicionarCategoria } from "./Pages/AdicionarCategoria";
import { EditarCategoria } from "./Pages/EditarCategoria";
import { Slides } from "./Pages/Slides";

const AppRoutes = () => {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apilovelier.onrender.com/produtos"
        );
        console.log(response.data);
        setProdutos(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apilovelier.onrender.com/categorias"
        );
        console.log(response.data);
        setCategorias(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home produtos={produtos} />} />
      <Route path="/loginAdm" element={<LoginAdm />} />

      {/* Procurar como proteger as paginas que precisa de senha */}

      <Route path="/areaAdm" element={<AreaAdm />} />
      <Route path="/produtos" element={<Produtos produtos={produtos} />} />
      <Route
        path="/categorias"
        element={<Categorias categorias={categorias} />}
      />
      <Route path="/slides" element={<Slides />} />
      <Route
        path="/adicionarProduto"
        element={<AdicionarProduto categorias={categorias} />}
      />
      <Route path="/editarProduto/:id" element={<EditarProduto />} />
      <Route path="/adicionarCategoria" element={<AdicionarCategoria />} />
      <Route path="/editarCategoria/:id" element={<EditarCategoria />} />
    </Routes>
  );
};

export default AppRoutes;
