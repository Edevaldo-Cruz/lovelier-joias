import Cards from "../../Components/Cards";
import Navbar from "../../Components/Navbar";
import logo from "../../Assets/logo.png";
import { Col, Row } from "antd";

export default function Home({ produtos }) {
  return (
    <>
      {produtos.length > 0 ? (
        <>
          <Navbar modo={"user"} />
          <Cards produtos={produtos} />
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              backgroundColor: "#F2C4C4",
            }}
          >
            <Col>
              <Row>
                <img src={logo} alt="logo" />
              </Row>
              <Row>
                <h2 style={{ textAlign: "center", color: "#7E2228" }}>
                  Aguarde, selecionando os melhores produtos para você...
                </h2>
              </Row>
            </Col>
          </div>
        </>
      )}
    </>
  );
}
