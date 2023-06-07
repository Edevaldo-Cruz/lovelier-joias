// import { useState } from "react";
// import { Container } from "@mui/material";
// import Navbar from "../../Components/Navbar";
// import { InputDefault } from "./styles";
// import { Link } from "react-router-dom";

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

export function LoginAdm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const login = "admin";
    const senha = "senha123";

    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === login && inputSenha === senha) {
      // Redireciona para a página /adm
      navigate("/adm");
    } else {
      // Exibe uma mensagem de erro
      alert("Login ou senha incorretos");
    }
  };

  return (
    <div>
      <label>
        Login:
        <input type="text" id="login" />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" id="senha" />
      </label>
      <br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
