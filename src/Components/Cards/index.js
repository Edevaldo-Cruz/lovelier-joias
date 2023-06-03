import produto from "../../Assets/aneis.webp";
export default function Cards() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          width: "45vw",
          height: "21rem",
          marginBlock: "1.5rem",
          border: "3px solid #ccc",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={produto}
            alt="imagem"
          />
        </div>
        <div>
          <strong style={{ marginBlock: "0" }}>Youcom</strong>
          <p style={{ marginBlock: "0" }}>Kit de Aneis Com Strass e Pigente</p>
          <strong style={{ marginBlock: "0" }}>R$ 59,90</strong>
        </div>
      </div>
      <div
        style={{
          width: "45vw",
          height: "21rem",
          marginBlock: "1.5rem",
          border: "3px solid #ccc",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={produto}
            alt="imagem"
          />
        </div>
        <div>
          <strong style={{ marginBlock: "0" }}>Youcom</strong>
          <p style={{ marginBlock: "0" }}>Kit de Aneis Com Strass e Pigente</p>
          <strong style={{ marginBlock: "0" }}>R$ 59,90</strong>
        </div>
      </div>
    </div>
  );
}
