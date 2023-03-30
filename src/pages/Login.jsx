import React from 'react'
import { Container } from 'react-bootstrap' 
import { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <>
      <Container>
      <form>
        <h3>Registro</h3>
        <div className="mb-3">
          <label>Email </label>
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
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuerdame
            </label>
          </div>
        </div>
        <div className="d-grid">
        <div class="col col-lg-2">
          <button type="submit" id="btn">
            Vamos
          </button>
          </div>
        </div>
        <p className="forgot-password text-right">
          Olvidaste <a href="#">contraseña?</a>
        </p>
      </form>
      </Container>
      </>
    )
  }
}