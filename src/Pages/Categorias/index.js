import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

export function Categorias({ categorias }) {
  return (
    <>
      <Navbar modo={"AdicionarCategoria"} />
      <h2 style={{ marginBottom: "0", color: "#7E2228" }}>Categorias</h2>
      <h4 style={{ marginTop: "0", marginLeft: "1rem", color: "#7E2228" }}>
        Selecione uma categoria para editar:
      </h4>
      <Container>
        {categorias.map((categoria, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "4rem",
              backgroundColor: "#FDDDE1",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <Link
              to={`/editarCategoria/${categoria._id}`}
              style={{ color: "#7E2228", textDecoration: "none" }}
            >
              <h4>{categoria.nome}</h4>
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
}
