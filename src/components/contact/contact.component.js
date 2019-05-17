import React, { Component } from 'react';
import axios from 'axios';
import { Column, Row } from 'simple-flexbox'; 

/*Styles*/
import '../contact/contact.style.css';

class Contact extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    name: '',
    phone: '',
    email: '',
    companyName: '',
    message: '',
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
        message: this.state.message
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
        buttonText: 'Mensaje enviado'
    })
  }
  
  render() {

  return (
        <section className="contacUsSection">
          <div className="contactFormContainer" >
              <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                  <label class="message-name" htmlFor="message-name">Nombre</label>
                  <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Su nombre" required value={this.state.name}/>

                  <label class="message-name" htmlFor="message-phone">Teléfono</label>
                  <input onChange={e => this.setState({ phone: e.target.value})} name="phone" class="message-name" type="text" placeholder="Su teléfono" required value={this.state.phone}/>

                  <label class="message-email" htmlFor="message-email">Email</label>
                  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

                  <label class="message-name" htmlFor="message-company">Empresa</label>
                  <input onChange={e => this.setState({ companyName: e.target.value})} name="companyName" class="message-name" type="text" placeholder="Nombre empresa"  value={this.state.companyName}/>

                  <label className="messageInput" htmlFor="message-input">Your Message</label>
                  <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="¡Escribe tu mensaje!" value={this.state.message} required/>

                  <div className="FormButton-container">
                  <button type="submit" className="Formbutton">{ this.state.buttonText }</button>
                  </div>
              </form>
          </div>
        </section>
        
    );
  }
}

export default Contact;
