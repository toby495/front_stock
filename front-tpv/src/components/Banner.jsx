import React from 'react';
import LogoI from '../media/logoBlanco.png';
export default class Banner extends React.Component{
    render(){
        return(
            <div className="banner-container">
                <div>
                     <h2>{this.props.invName} {this.props.sucuName} {this.props.emplName}</h2>
                </div>
                <div>
                    <img src={LogoI} alt=""/>
                </div>
            </div>
        )
    }
}