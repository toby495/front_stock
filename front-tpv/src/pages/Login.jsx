import React from 'react';
import '../login-styles/login.css';
import '../login-styles/login_desktop.css';
import {Link} from 'react-router-dom';
import '../login-styles/login_mobile.css';
import '../login-styles/keyframes.css';


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
           <section className="head">
                <div className="logo fadeInRight">
                    <img src="https://www.intekel.com/es/assets/images/logo.png" alt=""/>
                </div>
                <div className="sesion">
                    <h1>Iniciar Sesión</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="fadeInLeft">
                <label >Nombre</label> 
                <input onChange={this.handleChange} type="text" name="user" required /> <br/> <br/>
                <label>Contraseña</label>
                 <input id="contraseña" onChange={this.handleChange} type="password" name="password" required /> <br/> <br/>
              <Link to="/Categorias"> <button id="log">Entrar</button></Link> 
            </form>
           </section>
           
        </div>
    }
}