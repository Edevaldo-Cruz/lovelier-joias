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
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={produto.imagem}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="imagem"
              />
            </div>
            <div>
              <p
                style={{
                  marginBlock: "0",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#7E2228",
                }}
              >
                {produto.nome}
              </p>

              <p
                style={{
                  marginBlock: "0",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#7E2228",
                }}
              >
                {produto.descricao}
              </p>
              <strong>
                <p
                  style={{
                    marginBlock: "0",
                    textAlign: "center",
                    color: "#7E2228",
                  }}
                >
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </strong>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
