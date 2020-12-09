import React from 'react';
import '../navbar-styles/navbar.css';
import Table from '../components/Table';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Axios from 'axios';
import iInve from '../media/Grupo 4.png';
import iSucu from '../media/Grupo 7.png';
import iEmpl from '../media/Grupo 5.png';
import iVent from '../media/Grupo 9.png';
export default class Categorias extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            inve:{
                name: 'INVENTARIO',
                borde:'solid white',
                datos:{
                    id:'IDProducto',
                    dato1:'Nombre del producto',
                    dato2:'Precio'
                },
                visibilidad: ''
            },
            sucu:{
                name: '',
                borde:'',
                datos:{
                    id:'',
                    dato1:'',
                    dato2:''
                },
                visibilidad:''
            },
            emple:{
                name: '',
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
            },
            loading: true,
            error:null
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
            name: 'INVENTARIO',
            borde:'solid white',
            datos:{
                id:'IDProducto',
                dato1:'Nombre del producto',
                dato2:'Precio'
            },
            visibilidad:''
        },
        sucu:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        emple:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        loading: true,
        error:null
       })
       Axios.get('https://rickandmortyapi.com/api/episode').then((inve)=>{
           try {
            this.setState({
                loading:false,
                episode: inve.data
            })
           } catch (error) {
               console.error('Error-404');
           }
       })
   }

   handleSucu = () =>{
       this.setState({
        inve:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        sucu:{
            name:'SUCURSALES',
            borde:'solid white',
            datos:{
                id:'IDSucursal',
                dato1:'Nombre de la sucursal',
                dato2:'Dirección'
            },
            visibilidad:''
        },
        emple:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        loading:true,
        error:false
       })
   Axios.get('https://rickandmortyapi.com/api/location/').then((sucursal)=>{
       try {
        this.setState({
            loading:false,
            location: sucursal.data
        }) 
       } catch (error) {
          console.error('Error-404'); 
       }
   })
    }

    handleEmpl = () =>{
    this.setState({
        inve:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        sucu:{
            name:'',
            borde:'',
            datos:{
                id:'',
                dato1:'',
                dato2:''
            },
            visibilidad:'none'
        },
        emple:{
            name:'EMPLEADOS',
            borde:'solid white',
            datos:{
                id:'IDEmpleado',
                dato1:'Nombre del Empleado',
                dato2:'IDTienda'
            },
            visibilidad:''
        },
        loading:true,
        error:null
    });
    Axios.get('https://rickandmortyapi.com/api/character/').then((character)=>{
        try { 
        this.setState({
            loading:false,
            characters: character.data
        });  
        } catch (error) {
            console.error('Error 404');
        }
    })
    }



    render(){
        return(
        <div className="categorias-main">

            <div className="main-nav">
               <ul>
                  <li style={{border:this.state.inve.borde}}>
                    <img  src={iInve} alt="" onClick={this.handleInve} /> 
                  </li>   
                  <li  style={{border:this.state.sucu.borde}}>
                    <img src={iSucu} alt="" onClick={this.handleSucu} />
                  </li>
                  <li style={{border:this.state.emple.borde}}>
                    <img src={iEmpl} alt="" onClick={this.handleEmpl}  />
                  </li>
                  <li>
                      <img src={iVent} alt=""  />
                  </li>
               </ul>

            </div>


            <div className="banner">
                    <Banner invName={this.state.inve.name} sucuName={this.state.sucu.name}  emplName={this.state.emple.name}/>
            </div>
              
            <div className="main-buttons">
                <div className="inv-buttons">
                    <button style={{display:this.state.inve.visibilidad}}>Inventario</button>
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

            <div className="main-search">
                <Search/>
            </div>

            <div className="main-tab">
                    <Table inv={this.state.inve.datos} suc={this.state.sucu.datos} emp={this.state.emple.datos} listInv={this.state.episode.results} listSucu={this.state.location.results} listEmpl={this.state.characters.results} visiSucu={this.state.sucu.visibilidad} visiInve={this.state.inve.visibilidad} visiChar={this.state.emple.visibilidad} load={this.state.loading}/>
            </div>

           
               
        </div>

        )
    }
}