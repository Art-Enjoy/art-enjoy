import React from 'react';
import {  Button,  Container, Form } from 'react-bootstrap';


export default function SignIn() {
  return (
    <>
      <Container>
     
                    <Form>
                    <h3>Regístrate!</h3>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Nombre" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email 
                        </Form.Label>
                        <Form.Control type="email" placeholder="Introduce email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirme Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button id="btn" size="sm" type="submit">
                          Registrar
                        </Button>
                      </div>
                    </Form>
                 
      </Container>
      </>
  );
}
