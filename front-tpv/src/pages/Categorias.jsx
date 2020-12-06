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
                visibilidad: ''
            },
            sucu:{
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                },
                visibilidad:''
            },
            emple:{
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                },
                visibilidad:''
            },
            episode:{
                results:[]
            },
            location:{
                results:[]
            },
            characters:{
                results:[]
            }
        }
    }

    componentDidMount(){
        this.handleSucu();
        this.handleEmpl();
        this.handleInve();
    }
   handleInve = () =>{
       this.setState({
        inve:{
            borde:'dashed',
            datos:{
                id:'IDProducto',
                dato1:'Nombre del producto',
                dato2:'Precio'
            },
            visibilidad:''
        },
        sucu:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        emple:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
           
        }
       })
       Axios.get('https://rickandmortyapi.com/api/episode').then((inve)=>{
           this.setState({
               episode: inve.data
           })
       })
   }

   handleSucu = () =>{
       this.setState({
        inve:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        sucu:{
            borde:'dashed',
            datos:{
                id:'IDSucursal',
                dato1:'Nombre de la sucursal',
                dato2:'Dirección'
            },
            visibilidad:''
        },
        emple:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        }
       })
   Axios.get('https://rickandmortyapi.com/api/location/').then((sucursal)=>{
    this.setState({
        location: sucursal.data
    })
   })
    }

    handleEmpl = () =>{
    this.setState({
        inve:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        sucu:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        emple:{
            borde:'dashed',
            datos:{
                id:'IDEmpleado',
                dato1:'Nombre del Empleado',
                dato2:'IDTienda'
            },
            visibilidad:''
        }
    })
    Axios.get('https://rickandmortyapi.com/api/character/').then((character)=>{
        this.setState({
            characters: character.data
        });
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
                    <Table inv={this.state.inve.datos} suc={this.state.sucu.datos} emp={this.state.emple.datos} listInv={this.state.episode.results} listSucu={this.state.location.results} listEmpl={this.state.characters.results} visiSucu={this.state.sucu.visibilidad} visiInve={this.state.inve.visibilidad} visiChar={this.state.emple.visibilidad} />
                </div>
                <div className="main-buttons">
                <div className="inv-buttons">
                    <button style={{display:this.state.inve.visibilidad}}>Visualizar Producto</button>
                    <button style={{display:this.state.inve.visibilidad}}>Producto Nuevo</button>
                </div>
                <div className="suc-buttons">
                    <button style={{display:this.state.sucu.visibilidad}}>Visualizar Sucursal</button>
                    <button style={{display:this.state.sucu.visibilidad}}>Nueva Sucursal</button>
                </div>
                <div className="emp-buttons">
                    <button style={{display:this.state.emple.visibilidad}}>Visualizar Empleado</button>
                    <button style={{display:this.state.emple.visibilidad}}>Nuevo Empleado</button>
                </div>  
                </div>
               
            </div>

        )
    }
}