import React from 'react';
import '../navbar-styles/navbar.css';
import '../navbar-styles/navbar-mobile.css';
import Table from '../components/Table';
import Axios from 'axios';
export default class Categorias extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            inve:{
                borde:'dashed',
                datos:{
                    id:'IDProducto',
                    dato1:'Nombre del producto',
                    dato2:'Precio'
                },
                visibilidad: '0'
            },
            sucu:{
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                },
                visibilidad:'0'
            },
            emple:{
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                },
                visibilidad:'0'
            },
            episode:{
                results:[]
            },
            location:{
                results:[]
            }
        }
    }

    componentDidMount(){
        this.handleSucu();
        this.handleEmpl();
        this.handleInve();
    }
   handleInve = (e) =>{
       this.setState({
        inve:{
            borde:'dashed',
            datos:{
                id:'IDProducto',
                dato1:'Nombre del producto',
                dato2:'Precio'
            },
            visibilidad:'18px'
        },
        sucu:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'0'
        },
        emple:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'0'
           
        }
       })
       Axios.get('https://rickandmortyapi.com/api/episode').then((inve)=>{
           this.setState({
               episode: inve.data
           })
       })
   }

   handleSucu = (e) =>{
       this.setState({
        inve:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'0'
        },
        sucu:{
            borde:'dashed',
            datos:{
                id:'IDSucursal',
                dato1:'Nombre de la sucursal',
                dato2:'Dirección'
            },
            visibilidad:'18px'
        },
        emple:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'0'
        }
       })
   Axios.get('https://rickandmortyapi.com/api/location/').then((sucursal)=>{
    this.setState({
        location: sucursal.data
    })
   })
}


handleEmpl = (e) =>{
    this.setState({
        inve:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            }
        },
        sucu:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            }
        },
        emple:{
            borde:'dashed',
            datos:{
                id:'IDEmpleado',
                dato1:'Nombre del Empleado',
                dato2:'IDTienda'
            }
        }
    })
}



    render(){
        return(
            <div className="categorias-main">
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
                       <button className="type">Ventas</button>
                   </li>      
               </ul>
            </div>
                
                <div>
                    <Table inv={this.state.inve.datos} suc={this.state.sucu.datos} emp={this.state.emple.datos} listInv={this.state.episode.results} listSucu={this.state.location.results} visiSucu={this.state.sucu.visibilidad} visiInve={this.state.inve.visibilidad} />
                </div>
            </div>
            
        )
    }
}