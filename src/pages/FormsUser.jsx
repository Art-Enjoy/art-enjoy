import React from 'react'

const Forms = () => {
  

  return (
  <div className="container-form">
    <form onSubmit={handleSubmit} itemID="form1">
      <h1>Comprar entradas</h1>
<div className="mb-3">
<label htmlFor="title" className="form-label">Tipo de entrada</label>
<input name="title" type="text" className="form-control" placeholder="Adult@/Niñ@" onChange={handleTitleChange} required/>
</div>
<div className="mb-3">
<label htmlFor="price" className="form-label">Cantidad</label>
<input name="price" type="text" className="form-control" placeholder="Unidades..." onChange={handlePriceChange} required/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="description">Fecha</label>
<input name="description" type="text" className="form-control" id="--/--/----" required placeholder="Tell us about the product" onChange={handleDescriptionChange}/>
</div>
<div className="mb-3">
<label htmlFor="user" className="form-label">Hora</label>
<input name="user" type="text" className="form-control" required placeholder="--:--" onChange={handleUserChange} />
</div>
<div className="mb-3">
<label htmlFor="units" className="form-label">Nombre y apellidos</label>
<input name="units" type="number" min="1" max="25" className="form-control" required placeholder="Nombre/Apellidos" onChange={handleUnitsChange} />
</div>
<div className="mb-3">
<label htmlFor="location" className="form-label">Teléfono</label>
<input name="location" type="text" className="form-control" required placeholder="+34---------" onChange={handleLocationChange} />
</div>
<div className="mb-3">
<label htmlFor="location" className="form-label">DNI</label>
<input name="location" type="text" className="form-control" required placeholder="--------X" onChange={handleLocationChange} />
</div>
<div className="mb-3">
<label htmlFor="location" className="form-label">Email</label>
<input name="location" type="text" className="form-control" required placeholder="Introducir Email" onChange={handleLocationChange} />
</div>
<div className="mb-3">
<label htmlFor="location" className="form-label">Método de pago</label>
<input name="location" type="text" className="form-control" required placeholder="Tarjeta de crédito / Paypal" onChange={handleLocationChange} />
</div>

<button type="submit" className="btn btn-primary" id="btn-ad">Comprar</button>
</form>
</div>

)
}

export default Forms;
