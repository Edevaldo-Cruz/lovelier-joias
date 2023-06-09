import { useState } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { InputDefault, ContainerLogin } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

// export function LoginAdm() {
//   const [login, setLogin] = useState("");
//   const [senha, setSenha] = useState("");

//   const handleClick = () => {
//     window.alert("Senha inválida!");
//   };

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <form style={{ marginTop: "2rem" }}>
//           {/* onSubmit={handleFormSubmit} */}
//           <label>
//             Login:
//             <InputDefault
//               type="text"
//               value={login}
//               onChange={(e) => setLogin(e.target.value)}
//             />
//           </label>

//           <br />

//           <label>
//             Senha:
//             <InputDefault
//               type="password"
//               value={senha}
//               onChange={(e) => setSenha(e.target.value)}
//             />
//           </label>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "end",
//               marginTop: "2rem",
//             }}
//           >
//             {senha === "teste" && login === "teste" ? (
//               <Link
//                 to="/adm"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   borderRadius: "4px",
//                   border: "none",
//                   background: "#007bff",
//                   color: "#fff",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 Entrar
//               </Link>
//             ) : (
//               <button
//                 style={{
//                   padding: "0.5rem 1rem",
//                   borderRadius: "4px",
//                   border: "none",
//                   background: "#007bff",
//                   color: "#fff",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//                 onClick={handleClick}
//               >
//                 Entrar
//               </button>
//             )}
//           </div>
//         </form>
//       </Container>
//     </>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Row } from "antd";

export function LoginAdm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const login = "admin";
    const senha = "senha123";

    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === login && inputSenha === senha) {
      // Redireciona para a página /adm
      navigate("/AreaAdm");
    } else {
      // Exibe uma mensagem de erro
      alert("Login ou senha incorretos");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ContainerLogin>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "auto", height: "6rem" }}
            src={logo}
            alt="logo"
          />
        </div>
        <form>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <label
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Login
            </label>
            <InputDefault type="text" id="login" />
          </Row>

          <Row style={{ display: "flex", justifyContent: "center" }}>
            <label
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Senha:
            </label>
            <InputDefault type="password" id="senha" />
          </Row>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <button
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
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
        </form>
      </ContainerLogin>
    </div>
  );
}
