import React from 'react'
import { Container } from 'react-bootstrap' 
import { Component } from 'react'

export default class LoginAdmin extends Component {
  render() {
    return (
      <>
      <Container>
      <form>
        
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese contraseña"
          />
        </div>
        <div className="mb-3">
          
        </div>
        <div className="d-grid">
        <div class="col col-lg-2">
          <button type="submit" id="btn">
            Entrar
          </button>
          </div>
        </div>
        
      </form>
      </Container>
      </>
    )
  }
}