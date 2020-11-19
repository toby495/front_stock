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
                <tr className="cat-tr">
                    <td className="cat-td">Unos</td>
                    <td className="cat-td">Dos</td>
                    <td className="cat-td">3</td>
                </tr>
            </table>
        </div>
    }
}