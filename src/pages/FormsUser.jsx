import React from 'react'
import { Component } from 'react'
import { Container } from 'react-bootstrap'
export default class FormsUser extends Component {
  render() {
    return (
      <>
      <Container>
      <form>
        <h3>Comprar entradas</h3>
        <div className="mb-3">
          <label>Tipo de entrada</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adult@/Niñ@"
          />
        </div>
        <div className="mb-3">
          <label>Cantidad</label>
          <input
            type="number"
            className="form-control"
            placeholder="Unidades..."
          />
        </div>
        <div className="mb-3">
          <label>Fecha</label>
          <input
            type="number"
            className="form-control"
            placeholder="--/--/----"
          />
        </div>
        <div className="mb-3">
          <label>Hora</label>
          <input
            type="number"
            className="form-control"
            placeholder="--:--"
          />
        </div>
        <div className="mb-3">
          <label>Nombre y apellidos</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre/Apellidos"
          />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            type="number"
            className="form-control"
            placeholder="+34---------"
          />
        </div>
        <div className="mb-3">
          <label>DNI</label>
          <input
            type="tnumber"
            className="form-control"
            placeholder="--------X"
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese email"
          />
        </div>
        <div className="mb-3">
          <label>Método de pago</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tarjeta de crédito / Paypal"
          />
        </div>
        <div className="d-grid">
        <div class="col col-lg-2">
          <button type="submit" className="btn btn-dark">
            Comprar
          </button>
          </div>
        </div>
      </form>
      </Container>
      </>
    )
  }
}

