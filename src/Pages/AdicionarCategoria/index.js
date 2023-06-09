import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault } from "./styles";
import { useNavigate } from "react-router-dom";

export function AdicionarCategoria() {
  const [nome, setNome] = useState("");
  const [ativo, setAtivo] = useState(true);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://apilovelier.onrender.com/categoria",
        {
          nome,
          ativo,
        }
      );
      console.log(response.data);
      navigate("/categorias");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <form onSubmit={handleFormSubmit} style={{ marginTop: "2rem" }}>
          <label>
            Nome:
            <InputDefault
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          <label>
            Ativo
            <input
              type="checkbox"
              checked={ativo}
              onChange={(e) => setAtivo(e.target.checked)}
            />
          </label>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "none",
                background: "#7E2228",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Salvar
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}
