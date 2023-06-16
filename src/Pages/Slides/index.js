import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export function Slides({ produtos }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apilovelier.onrender.com/banners"
        );
        setBanners(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar modo={"AdicionarSlide"} />
      <Container>
        {banners.map((banner, index) => (
          <Link
            to={`/editarSlide/${banner._id}`}
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
                src={banner.imagem}
                alt={banner.descricao}
                style={{
                  width: "30%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  display: "block",
                }}
              />
              <h4>{banner.descricao}</h4>
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
}
