import React from 'react';
import '../login-styles/login.css';
import '../login-styles/login_desktop.css';
import '../login-styles/login_mobile.css';


export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            form:{
                user: '',
                password: ''
              }
          }
    }

  
handleChange = (e) =>{
   this.setState({
         form:{
            ...this.state.form,
             [e.target.name] : e.target.value
           }
            });
        }
   

    render(){
        return <div className="login-main">
           <header className="head">
                <div className="logo fadeInRight">
                    <img src="https://www.intekel.com/es/assets/images/logo.png" alt=""/>
                </div>
                <div className="sesion">
                    <h1>Iniciar Sesión</h1>
                </div>
           </header>
           <section className="formulario fadeInLeft">
            <form onSubmit={this.handleSubmit}>
                <label >Nombre</label> 
                <input onChange={this.handleChange} type="text" name="user" required /> <br/> <br/>
                <label>Contraseña</label>
                 <input id="contraseña" onChange={this.handleChange} type="password" name="password" required /> <br/> <br/>
                <button id="log">Entrar</button>
            </form>
           </section>
        </div>
    }
}