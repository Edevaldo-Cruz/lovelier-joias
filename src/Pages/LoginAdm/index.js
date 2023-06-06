import { useState } from "react";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault } from "./styles";
import { Link } from "react-router-dom";

export function LoginAdm() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleClick = () => {
    if (login === "teste" && senha === "teste") {
      // Redireciona para a página /adm
      window.location.href = "/adm";
    } else {
      // Exibe um alerta de senha inválida
      window.alert("Senha inválida!");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <form style={{ marginTop: "2rem" }}>
          {/* onSubmit={handleFormSubmit} */}
          <label>
            Login:
            <InputDefault
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>

          <br />

          <label>
            Senha:
            <InputDefault
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "2rem",
            }}
          >
            <Link
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
              onClick={handleClick}
            >
              Entrar
            </Link>
          </div>
        </form>
      </Container>
    </>
  );
}
