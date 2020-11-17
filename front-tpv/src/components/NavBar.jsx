import React from 'react';
import '../navbar-styles/navbar.css';
import '../navbar-styles/navbar-mobile.css';
import '../navbar-styles/navbar-desktop.css';
export default class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            section:[]
        }
    }
    componentDidMount(){
       this.setState({
           section:[{
               id:'1',
               name:'Inventario'
           },
           {
               id:'2',
               name:'Empleados'
           },
           {
               id:'3',
               name:'Sucursales'
           },
           {
               id:'4',
               name:'Ventas'
           }
        ]
       })
    }
    render(){
        return(
            <div className="main-nav">
               <ul>
                   {this.state.section.map((type)=>{
                       return <li key={type.id}>
                           <button id="type">{type.name}</button>
                       </li>
                   })}
               </ul>
            </div>
        );
    }
}
