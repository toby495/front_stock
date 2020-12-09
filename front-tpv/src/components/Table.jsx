import React from 'react';
import '../table-style/table.css'

export default class Table extends React.Component{


  
    render(){
        return <div className="main-table">
            <table className="cat-table">
                <tr className="cat-tr">
                     <th className="cat-th">{this.props.inv.id}{this.props.suc.id}{this.props.emp.id}</th>
                     <th className="cat-th">{this.props.inv.dato1}{this.props.suc.dato1}{this.props.emp.dato1}</th>
                     <th className="cat-th">{this.props.inv.dato2}{this.props.suc.dato2}{this.props.emp.dato2}</th>
                </tr>
                {this.props.listInv.map((empleado)=>{
                    return <tr key={empleado.id} style={{display:this.props.visiInve}} >
                        <td>{empleado.id}</td>
                        <td> {empleado.name} </td>
                        <td> {empleado.episode} </td>
                    </tr>
                })}
                {this.props.loading &&(
                    <div>
                        <h1>Loading</h1>
                    </div>
                )}
                {this.props.listSucu.map((sucu)=>{
                    return <tr key={sucu.id} style={{display:this.props.visiSucu}} d>
                        <td> {sucu.id} </td>
                        <td> {sucu.name} </td>
                        <td> {sucu.type} </td>
                    </tr>
                })}        
                {this.props.listEmpl.map((character)=>{
                    return <tr key={character.id} style={{display:this.props.visiChar}}>
                        <td>{character.id}</td>
                        <td>{character.name}</td>
                        <td>{character.origin.name}</td>
                    </tr>
                })}    
            </table>
        </div>
    }
}