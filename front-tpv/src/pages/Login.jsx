import React from 'react';
import Logo from '../media/logoIntekel.png';
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
                    <img src={Logo} alt=""/>
                </div>
                <div className="sesion">
                    <h3>TERMINAL PUNTO DE VENTA</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="fadeInLeft">
                
                <input className="input" onChange={this.handleChange} type="text" name="user" required  placeholder="Usuario"/> <br/> <br/>
                
                 <input className="input" onChange={this.handleChange} type="password" name="password" required placeholder="Contraseña" /> <br/> <br/>
              <Link to="/Categorias"> <button id="log">ENTRAR</button></Link> 
            </form>
           </section>
           
        </div>
    }
}