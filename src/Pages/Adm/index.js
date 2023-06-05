import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export function Adm({ produtos }) {
  return (
    <>
      <Navbar />
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
              <img
                src={produto.imagem}
                alt="produto"
                style={{
                  width: "30%",
                  height: "5rem",
                  backgroundColor: "gray",
                }}
              />

              <h4>{produto.nome}</h4>
            </div>
          </Link>
        ))}

        <div style={{ position: "relative" }}>
          <Link
            to="/adicionarProduto"
            style={{
              position: "fixed",
              bottom: "0",
              right: "0",
              margin: "20px",
              zIndex: "999",
            }}
          >
            <IoIosAddCircleOutline size={65} />
          </Link>
        </div>
      </Container>
    </>
  );
}
