import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function EditarSlide() {
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [ativo, setAtivo] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apilovelier.onrender.com/banners/${id}`
        );
        const banner = response.data;
        setDescricao(banner.descricao);
        setImagem(banner.imagem);
        setDataValidade(banner.dataValidade.split("T")[0]);
        setAtivo(banner.ativo);
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
        `https://apilovelier.onrender.com/banners/${id}`,
        {
          descricao,
          imagem,
          dataValidade,
          ativo,
        }
      );
      console.log(response.data);
      navigate("/slides");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://apilovelier.onrender.com/banner/${id}`
      );
      navigate("/slides");
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
            Descrição:
            <InputDefault
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </label>

          <label>
            Imagem:
            <InputDefault
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </label>

          <label>
            Data de vencimento:
            <InputDefault
              type="date"
              value={dataValidade}
              onChange={(e) => setDataValidade(e.target.value)}
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
