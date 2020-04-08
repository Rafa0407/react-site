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
  
  handleCheck = () => {
      this.setState({checked: !this.state.checked});
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
    // console.log(data);
    axios({
        method: 'post',
        url: 'https://vinet.co.cr/mailsender/public/email/send',
        data: data, 
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      }) 
    .then( res => {
        // console.log(res);
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( (err) => {
      // console.log(err);
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
        buttonText: 'Mensaje enviado', 
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
                        <input onChange={e => this.setState({ phone: e.target.value})} name="phone" className="inputContainer" type="text" maxLength="8" placeholder="Su teléfono" required value={this.state.phone}/>

                        <label className="inputLabel" htmlFor="message-email">Email</label>
                        <input onChange={(e) => this.setState({ email: e.target.value,  checked: !this.state.checked})} name="email" className="inputContainer" type="email" maxLength="25" placeholder="your@email.com" required value={this.state.email} />

                        <label className="inputLabel" htmlFor="message-company">Empresa</label>
                        <input onChange={e => this.setState({ companyName: e.target.value})} name="companyName" className="inputContainer" type="text" maxLength="25" placeholder="Nombre empresa"  required value={this.state.companyName}/>

                        <label  className="inputLabel" htmlFor="message-input">Mensaje</label>
                        <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="inputContainer" type="text" maxLength="400" placeholder="¡Escribe tu mensaje!" required value={this.state.message} />
                        
                        <label  className="inputLabel" htmlFor="message-arch">Elija una arquitectura de su interés</label>
                        
                        <div className="checkboxContainer" id="radioGroup">
 
                            <div className="checkColumn">
                              <label>
                                <input required type="radio" name="radioGroup" 
                                value="Seguridad"
                                checked={this.state.architecture === 'Seguridad'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Seguridad
                              </label>
                              <label>
                                <input required type="radio" name="radioGroup" 
                                value="Nube"
                                checked={this.state.architecture === 'Nube'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Nube
                              </label>
                              <label>
                                <input required type="radio" name="radioGroup" 
                                value="Colaboración"
                                checked={this.state.architecture === 'Colaboración'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Colaboración
                              </label>
                              <label>
                                <input required type="radio" name="radioGroup" 
                                value="Centro de redes"
                                checked={this.state.architecture === 'Centro de redes'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Centro de redes
                              </label>
                              </div>
                            <div className="checkColumn">
                              <label>
                                <input type="radio" name="radioGroup" 
                                value="Redes inhalambricas"
                                checked={this.state.architecture === 'Redes inhalambricas'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Redes inhalambricas y movilidad
                              </label>
                              <label>
                                <input type="radio" name="radioGroup" 
                                value="Redes"
                                checked={this.state.architecture === 'Redes'}
                                onChange={e => this.setState({ architecture: e.target.value})} 
                                />
                                Redes
                              </label>
                              <label>
                                <input type="radio" name="radioGroup"  
                                value="Consultoria Avanzada"
                                checked={this.state.architecture === 'Consultoria Avanzada'}
                                onChange={e => this.setState({ architecture: e.target.value})}
                                />
                                Consultoria avanzada
                              </label>
                            </div>
                        </div>
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