import React from 'react'
import { Container } from 'react-bootstrap'


const Questions = () => {
  return (
    <>
    <Container>
    <div ClassName='text-questions'>
      <ul>
        <li ClassName= 'text-questions'>¿El precio varía dependiendo de dónde lo compres?
        </li>
        <p>No, el precio de la entrada es el mismo en taquilla, por teléfono o vía web.
        </p>
        <li ClassName= 'text-questions'>¿Puedo adquirir entradas para otras personas?
        </li>
        <p>Sí, el comprador no tiene que ser necesariamente quien acude al espectáculo. Las entradas no son nominativas
        </p>
        <li ClassName= 'text-questions'>¿Devuelven el dinero de las entradas?
        </li>
        <p>Sólo en el caso de que la función o el concierto sean cancelados por motivos imputables a la organización.
        </p>
        <li ClassName= 'text-questions'>¿Cómo conseguir facturas de las compras que realizo?
        </li>
        <p>Escriba un correo electrónico a correo@entradaArt&Enjoy.es indicando el motivo de su consulta.
        </p>
        <li ClassName= 'text-questions'>¿Hay algún teléfono de incidencias?
        </li>
        <p>Sí, puede contactarnos en el teléfono de soporte 902 000 000, en el correo electrónico: correo@entradaArt&Enjoy.es o mediante el formulario de contacto.
        </p>
        <li ClassName= 'text-questions'>¿Tiene alguna duda adicional?
        </li>
        <p>Puede escribirnos un correo a prensa@Art&Enjoy.es
        </p>
      </ul>


    </div>
    </Container>
    </>
    
  )
}

export default Questions