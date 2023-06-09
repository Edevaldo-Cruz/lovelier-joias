import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function EditarCategoria() {
  const [nome, setNome] = useState("");
  const [ativo, setAtivo] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apilovelier.onrender.com/categorias/${id}`
        );
        const categoria = response.data;
        setNome(categoria.nome);
        setAtivo(categoria.ativo);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://apilovelier.onrender.com/categorias/${id}`,
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://apilovelier.onrender.com/categorias/${id}`
      );
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

          <br />

          <label>
            Ativo
            <input
              type="checkbox"
              checked={ativo}
              onChange={(e) => setAtivo(e.target.checked)}
            />
          </label>
          <br />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              onClick={handleDelete}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "1px solid #7E2228",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Deletar
            </button>
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
