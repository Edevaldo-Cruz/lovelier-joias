import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Container } from "@mui/material";

export function AreaAdm() {
  return (
    <>
      <Navbar modo={"adm"} />
      <Container>
        <h2 style={{ marginBottom: "0", color: "#7E2228" }}>
          Bem vindas Rosana!
        </h2>
        <h4 style={{ marginTop: "0", marginLeft: "1rem", color: "#7E2228" }}>
          Selecione a opção deseja gerenciar:
        </h4>
        <div
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
            to="/produtos"
            style={{ color: "#7E2228", textDecoration: "none" }}
          >
            <h3>Produtos</h3>
          </Link>
        </div>

        <div
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
            to="/categorias"
            style={{ color: "#7E2228", textDecoration: "none" }}
          >
            <h3>Categorias</h3>
          </Link>
        </div>
      </Container>
    </>
  );
}
