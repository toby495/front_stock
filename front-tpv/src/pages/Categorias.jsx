import React from 'react';
import '../navbar-styles/navbar.css'
import '../navbar-styles/navbar-mobile.css'
import Table from '../components/Table'
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
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                }  
            }
        }
    }

   handleInve = (e) =>{
        this.setState({
            inve:{
                borde:'dashed',
                datos:{
                    id:'IDProducto',
                    dato1:'Nombre del producto',
                    dato2:'Precio'
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
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                }  
            }
        })
   }

   handleSucu = (e) =>{
    this.setState({
        inve:{
            borde:'',
            datos:{
                id:'',
                dato2:'',
                dato2:''
            }
        },
        sucu:{
            borde:'dashed',
            datos:{
                id:'IDSucursal',
                dato1:'Nombre de la sucursal',
                dato2:'Dirección'
            }
        },
        emple:{
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            }  
        }
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
                    <Table inv={this.state.inve.datos} suc={this.state.sucu.datos} emp={this.state.emple.datos}/>
                </div>
            </div>
            
        )
    }
}