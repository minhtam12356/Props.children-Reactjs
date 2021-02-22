import React from 'react';
import circle from '../Image/circle.svg';
import img from '../Image/img.svg';
import './style.css'

class report extends React.Component{
    render(){
        console.log(this.props)
        let {h2, children, p} = this.props;
        return(
            <div id='component'>
                <img src={circle}></img>
                <div id='content'>
                    <p>{h2}</p>
                    <h1>{children}</h1>
                    <div id='number'>
                        <img src={img}></img>
                        <p>{p}</p>
                    </div>      
                </div>
                    
            </div>
        );
    }
}

export default report;