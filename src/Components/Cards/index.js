export default function Cards({ produtos }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
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
              <strong style={{ marginBlock: "0" }}>{produto.nome}</strong>
              <p style={{ marginBlock: "0" }}>{produto.descricao}</p>
              <strong style={{ marginBlock: "0" }}>R$ {produto.preco}</strong>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
