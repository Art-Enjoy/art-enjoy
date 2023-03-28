
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import React, { useRef } from 'react';

const Contact = () => {
  const refForm = useRef();
  const [formFilled, setFormFilled] = useState(false); // Nuevo estado

  const handleInputChange = () => {
    // Verificar si todos los campos tienen un valor
    const form = refForm.current;
    const name = form.elements["user_name"].value;
    const email = form.elements["user_email"].value;
    const message = form.elements["user_message"].value;

    if (name && email && message) {
      setFormFilled(true);
    } else {
     
      setFormFilled(false);
      
    }
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    console.log(refForm.current);

    const serviceId = "service_621iots";
    const templateId = "template_45va7h8";
    const apiKey = "tVdvYzgWKMG7exPOo";

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then(result => console.log(result.text))
      .catch(error => console.error(error))
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    // Mostrar modal solo si todos los campos están llenos
    if (formFilled) {
      setShow(true);
    }else {
      alert('Por favor rellene todos los campos');
    }
  };

  return (
    
      <><div className="div-form">
      <form className="form-mail" ref={refForm} onSubmit={handleSendEmail}>
        <div className="header-contact">
          <h2>Contáctanos</h2>
        </div>
        <label>Name</label>
        <input type="text" name="user_name" onChange={handleInputChange} />
        <hr />

        <label>Email</label>
        <input type="email" name="user_email" onChange={handleInputChange} />
        <hr />

        <label>Message</label>
        <textarea
          name="user_message"
          cols="30"
          rows="10"
          onChange={handleInputChange}
        ></textarea>
        <hr />
        <button
          type="submit"
          className="btn btn-primary"
          id="btn"
          onClick={handleShow}
        >
          Send
        </button>
      </form>
    </div><div clasName="data">
        <ul>
          <li>EMAIL:correo@entradaArt&Enjoy.es</li>
          <li> TELÉFONO:699887766</li>
          <li> DIRECCIÓN:C/MAJ.nº5.cp:11500.Sevilla</li>

        </ul>
      </div><div ClassName="text-container-contact">

        <p ClassName="text-contact">Este sitio está protegido por reCAPTCHA y se aplica la Política de Privacidad y las Condiciones del Servicio de Google.
        </p>
        <p ClassName="text-contact">Responsable: Art&Enjoy. Finalidad: Resolver las dudas o cuestiones que se puedan plantear en la sección “Contacto” de la página web de la entidad. (Legitimación: Art. 6.1 a) RGPD: Consentimiento del Interesado. Destinatarios: No se prevén cesiones de datos. No se prevé la transferencia internacional de datos. Derechos: Acceso, rectificación, supresión, oposición, limitación del tratamiento y, en su caso, portabilidad de los datos y derechos digitales recogidos en la Ley 3/2018. Asimismo tiene derecho a presentar una reclamación ante la autoridad de control. Procedencia: El propio interesado o su representante legal.
        </p>
      </div><Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Su mensaje ha sido enviado!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">En un plazo de 24 horas nos pondremos en contacto con usted</Modal.Body>

      </Modal></>
      )
}

      export default Contact;
