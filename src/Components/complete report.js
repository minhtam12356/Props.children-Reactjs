import React from 'react';
import circle from '../Image/circle.svg';
import img from '../Image/img.svg';
import './style.css'
import PropTypes from 'prop-types';

class report extends React.Component{
    render(){
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

report.propTypes = {
    h2 : PropTypes.string,
    children : PropTypes.string,
    p : PropTypes.string
}

export default report;