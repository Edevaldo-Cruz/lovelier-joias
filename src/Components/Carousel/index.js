import { Carousel } from "antd";
import img1 from "../../Assets/slide/img1.webp";
import img2 from "../../Assets/slide/img2.webp";
import img3 from "../../Assets/slide/img3.webp";
import img4 from "../../Assets/slide/img4.webp";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
export default function Slide() {
  return (
    <Carousel autoplay>
      <div>
        <img
          style={{ width: "100%", height: "25rem" }}
          src={img1}
          alt="imagem 1"
        />
      </div>
      <div>
        <img
          style={{ width: "100%", height: "25rem" }}
          src={img2}
          alt="imagem 2"
        />
      </div>
      <div>
        <img
          style={{ width: "100%", height: "25rem" }}
          src={img3}
          alt="imagem 3"
        />
      </div>
      <div>
        <img
          style={{ width: "100%", height: "25rem" }}
          src={img4}
          alt="imagem 4"
        />
      </div>
    </Carousel>
  );
}
