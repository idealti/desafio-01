import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import Axios from "axios";

import relogio from "../../assets/relogio.png";
import baloes from "../../assets/baloes.png";

const schema = Yup.object().shape({
  Nome: Yup.string().required("Nome é obrigatorio"),
  Mail: Yup.string().required("E-mail Obrigatorio"),
  Mensagem: Yup.string().required("Mensagem é obrigatorio"),
});

export default function Containerr() {
  const [values, setValues] = useState("");

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }
  async function onSubmit() {
    await Axios.post("http://mockbin.com/request?foo=bar&foo=baz", values).then(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Mensagem enviada com sucesso!");
        } else {
          alert("Erro ao enviar mensagem.");
        }
      }
    );
  }

  return (
    <div>
      <Container>
        <Row className='row'>
          <Col xs={12} md={8}>
            <div className='form'>
              <h2>Entregas Rapidas e eficientes</h2>
              <h4>
                temos experiencia de cargas para pessoas e empresas em tempo
                recorde para o Brasil
              </h4>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <img src={relogio} alt='logo' className='relogio' />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='row'>
          <Col xs={12} md={8}>
            <div className='form'>
              <Form schema={schema} onSubmit={onSubmit}>
                Nome
                <div className='input-text'>
                  <Input
                    id='Nome'
                    name='Nome'
                    type='text'
                    onChange={onChange}
                  />
                </div>
                E-Mail
                <div className='input-text'>
                  <Input
                    id='Mail'
                    name='Mail'
                    type='text'
                    onChange={onChange}
                  />
                </div>
                Mensagem
                <div className='input-text'>
                  <Input
                    id='Mensagem'
                    name='Mensagem'
                    type='text'
                    onChange={onChange}
                  />
                </div>
                <div>
                  <button type='submit'>Salvar</button>
                </div>
              </Form>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <img src={baloes} alt='logo' className='baloes' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
