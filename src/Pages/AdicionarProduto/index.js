import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault } from "./styles";

export function AdicionarProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [disponibilidade, setDisponibilidade] = useState(false);
  const [destaque, setDestaque] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://apilovelier.onrender.com/categoria",
        {
          nome,
          descricao,
          categoria,
          preco,
          imagem,
          disponibilidade,
          destaque,
        }
      );
      console.log(response.data);
      setNome("");
      setDescricao("");
      setCategoria("");
      setPreco("");
      setImagem("");
      setDisponibilidade(false);
      setDestaque(false);
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
            Descrição:
            <InputDefault
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </label>

          <br />
          <label>
            Categoria:
            <InputDefault
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </label>
          <br />
          <label>
            Preço:
            <InputDefault
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          <br />
          <label>
            Caminho da imagem:
            <InputDefault
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </label>
          <label>
            Disponivel
            <input
              type="checkbox"
              checked={disponibilidade}
              onChange={(e) => setDisponibilidade(e.target.checked)}
            />
          </label>
          <br />
          <label>
            Destaque
            <input
              type="checkbox"
              checked={destaque}
              onChange={(e) => setDestaque(e.target.checked)}
            />
          </label>
          <br />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "none",
                background: "#007bff",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}
