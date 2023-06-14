import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export function Slides({ produtos }) {
  return (
    <>
      <Navbar modo={"AdicionarProduto"} />
      <Container>
        {produtos.map((produto, index) => (
          <Link
            to={`/editarProduto/${produto._id}`}
            key={index}
            style={{
              display: "flex",
              margin: "0.5rem",
              border: "2px solid black",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                backgroundColor: "pink",
                padding: "0.2rem",
              }}
            >
              {/* <iframe
                src={produto.imagem}
                width="30%"
                height="100%"
                allow="autoplay"
              /> */}

              <img
                src={produto.imagem}
                alt="produto"
                style={{
                  width: "30%",
                  height: "100%",
                  objectFit: "cover", // Para garantir que a imagem ocupe todo o espaço disponível
                  border: "none", // Para remover a borda
                  display: "block", // Para remover o espaço reservado para ícone
                }}
              />

              <h4>{produto.nome}</h4>
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
}
