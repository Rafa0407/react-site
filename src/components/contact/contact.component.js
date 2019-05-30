import React, { Component } from 'react';
import axios from 'axios';

/*Styles*/
import '../contact/contact.style.css';

class Contact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    companyName: '',
    message: '',
    architecture: '',
    sent: false,
    buttonText: 'Enviar Mensaje'
  }
  
  formSubmit = (e) => {
    e.preventDefault()

    this.setState({
        buttonText: '...enviando'
    })

    let data = {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        companyName: this.state.companyName,
        message: this.state.message,
        architecture: this.state.architecture
    }

    axios.post('http://localhost:3002/send', data) // API URL... change this for the production URL.... 
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      this.setState({
        buttonText: 'no se pudo enviar'
    })
    })
  }
  
  resetForm = () => {
    this.setState({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        message: '',
        architecture: '',
        buttonText: 'Mensaje enviado'
    })
  }
  
  render() {

  return (
        <section className="contacUsSection" id="contactus">
              <div className="contactHeader"> 
                  <h1>Hablemos</h1> 
            </div>
          <div className="contactFormContainer" >
                  <div className="formContainer">
                    <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                        
                        <label className="inputLabel" htmlFor="message-name">Nombre</label>
                        <input onChange={e => this.setState({ name: e.target.value})} name="name" className="inputContainer" type="text" maxLength="20" placeholder="Su nombre" required value={this.state.name}/>

                        <label className="inputLabel" htmlFor="message-phone">Teléfono</label>
                        <input onChange={e => this.setState({ phone: e.target.value})} name="phone" className="inputContainer" type="text" maxLength="10" placeholder="Su teléfono" required value={this.state.phone}/>

                        <label className="inputLabel" htmlFor="message-email">Email</label>
                        <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="inputContainer" type="email" maxLength="25" placeholder="your@email.com" required value={this.state.email} />

                        <label className="inputLabel" htmlFor="message-company">Empresa</label>
                        <input onChange={e => this.setState({ companyName: e.target.value})} name="companyName" className="inputContainer" type="text" maxLength="25" placeholder="Nombre empresa"  required value={this.state.companyName}/>

                        <label  className="inputLabel" htmlFor="message-input">Mensaje</label>
                        <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="inputContainer" type="text" maxLength="400" placeholder="¡Escribe tu mensaje!" required value={this.state.message} />

                        <div className="FormButton-container">
                        <button type="submit" className="Formbutton">{ this.state.buttonText }</button>
                        </div>
                    </form>
                  </div>
                  <div className="contactsContainer">
                    <div className="contactItem">
                      <h1>Costa Rica</h1>
                      <a href="tel:+50622342682"><p>+(506) 2234 2682</p></a> 
                      <a href="mailto:contacto@vinet.co.cr"><p>contacto@vinet.co.cr </p></a>
                      <p>Curridabat, Costa Rica.</p>
                    </div>
                    <div className="contactItem">
                      <h1>Nicaragua</h1>
                      <a href="tel:+50522516327"><p>+(505) 2251 6327</p></a>
                      <a href="mailto:contacto@vinet.co.cr"><p>contacto@vinet.co.cr</p></a>
                      <p>Managua, Nicaragua.</p>
                    </div>
                  </div>
          </div>
        </section>
        
    );
  }
}

export default Contact;
