import { Carousel } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SlidesComponents() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apilovelier.onrender.com/banners"
        );
        console.log(response.data);
        setBanners(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Carousel autoplay>
      {banners
        .filter(
          (banner) =>
            banner.ativo === true &&
            // !banner.dataValidade &&
            // new Date(banner.dataValidade) >= new Date()
            (!banner.dataValidade ||
              new Date(banner.dataValidade) >= new Date())
        )
        .map((banner, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", height: "25rem" }}
              src={banner.imagem}
              alt={banner.descricao}
            />
          </div>
        ))}
    </Carousel>
  );
}
