import React from 'react';
import '../styles/login.css';

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
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="sesion">
                    <h1>Iniciar Sesión</h1>
                </div>
           </header>
           <section className="formulario">
            <form onSubmit={this.handleSubmit}>
                <label>Nombre</label> 
                <input onChange={this.handleChange} type="text" name="user"  /> <br/>
                <label>Contraseña</label>
                 <input onChange={this.handleChange} type="password" name="password"  /> <br/>
                <button>Entrar</button>
            </form>
           </section>
        </div>
    }
}