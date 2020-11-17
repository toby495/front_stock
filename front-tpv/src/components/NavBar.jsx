import React from 'react';
import '../navbar-styles/navbar.css';
import '../navbar-styles/navbar-mobile.css';
import '../navbar-styles/navbar-desktop.css';

export default class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            inve:{
                borde:''
            },
            sucu:{
                borde:''
            },
            emple:{
                borde:''
            },
            vent:{
                borde:''
            }
        }
    }

   handleInve = (e) =>{
        this.setState({
            inve:{
                borde:'dashed',
                component:'Login'
            },
            sucu:{
                borde:''
            },
            emple:{
                borde:''
            },
            vent:{
                borde:''
            },
        })
   }

   handleSucu = (e) =>{
    this.setState({
        inve:{
            borde:''
        },
        sucu:{
            borde:'dashed'
        },
        emple:{
            borde:''
        },
        vent:{
            borde:''
        }
    })
}

handleEmpl = (e) =>{
    this.setState({
        inve:{
            borde:''
        },
        sucu:{
            borde:''
        },
        emple:{
            borde:'dashed'
        },
        vent:{
            borde:''
        }
    })
}

handleVent = (e) =>{
    this.setState({
        inve:{
            borde:''
        },
        sucu:{
            borde:''
        },
        emple:{
            borde:''
        },
        vent:{
            borde:'dashed'
        }
    })
}
    
    
    render(){
        return(
            <div className="main-nav">
               <ul>
                   <li>
                       <button onClick={this.handleInve} style={{border:this.state.inve.borde}} className="type">Inventario</button>
                   </li>
                   <li>
                       <button onClick={this.handleSucu} style={{border:this.state.sucu.borde}} className="type">Sucursales</button>
                   </li>
                   <li>
                       <button onClick={this.handleEmpl} style={{border:this.state.emple.borde}} className="type">Empleados</button>
                   </li>
                   <li>
                       <button onClick={this.handleVent} style={{border:this.state.vent.borde}} className="type">Ventas</button>
                   </li>
                   
               </ul>
            </div>
        );
    }
}
