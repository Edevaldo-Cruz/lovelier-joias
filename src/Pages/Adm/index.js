import React from "react";
import Navbar from "../../Components/Navbar";
import { Button, Form, Input, Space, Switch } from "antd";
import { Container } from "@mui/material";
import axios from "axios";

export function Adm() {
  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(
          () => {
            setSubmittable(true);
          },
          () => {
            setSubmittable(false);
          }
        );
    }, [values]);
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        Salvar
      </Button>
    );
  };

  const [form] = Form.useForm();

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://apilovelier.onrender.com/produto",
        values
      );
      console.log(response.data); // Você pode tratar a resposta conforme necessário
      // Limpar o formulário após o envio bem-sucedido, se desejar
      form.resetFields();
    } catch (error) {
      console.error(error.message);
      // Lidar com erros de envio, se necessário
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="nomeProduto"
            label="Nome"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="descricaoProduto"
            label="Descrição"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="CategoriaProduto"
            label="Categoria"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="precoProduto"
            label="Preço"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="imagemProduto"
            label="Caminho da imagem"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Item name="disponibilidadeProduto" label="Disponibilidade">
              <Switch />
            </Form.Item>

            <Form.Item name="destaqueProduto" label="Destaque?">
              <Switch />
            </Form.Item>
          </div>

          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "center" }}>
              <Button htmlType="reset">Limpar campo</Button>
              <SubmitButton form={form} />
            </Space>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
}
