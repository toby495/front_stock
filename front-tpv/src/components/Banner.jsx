import React from 'react';
import LogoI from '../media/logoBlanco.png';
export default class Banner extends React.Component{

    render(){
        return(
            <div className="banner-container">
                <div>
                    <h2>
                        <i onClick={this.props.show} className="bar fas fa-bars" style={{display:this.props.banVal.bar1}}></i> 
                        <i onClick={this.props.hide} className="bar2 fas fa-bars" style={{display:this.props.banVal.bar2}} ></i> 
                        {this.props.invName} {this.props.sucuName} {this.props.emplName}
                    </h2>
                </div>
                <div>
                    <img src={LogoI} alt=""/>
                </div>
                
            </div>
        )
    }
}