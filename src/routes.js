import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Adm } from "./Pages/Adm";
import { LoginAdm } from "./Pages/LoginAdm";
import { AdicionarProduto } from "./Pages/AdicionarProduto";
import axios from "axios";
import { EditarProduto } from "./Pages/EditarProduto";

const AppRoutes = () => {
  const [produtos, setProdutos] = useState([]);

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

  return (
    <Routes>
      <Route path="/" element={<Home produtos={produtos} />} />
      <Route path="/loginAdm" element={<LoginAdm />} />

      {/* Procurar como proteger as paginas que precisa de senha */}

      <Route path="/adm" element={<Adm produtos={produtos} />} />
      <Route path="/adicionarProduto" element={<AdicionarProduto />} />
      <Route path="/editarProduto/:id" element={<EditarProduto />} />
    </Routes>
  );
};

export default AppRoutes;
