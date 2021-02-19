import React from 'react';
class Step extends React.Component{
    render(){
        return(
            <div>
                <h2>Step number</h2>
                <button id="subBtn" onClick={this.props.click}>-</button>
                <span id="numberPreview">{this.props.number}</span>
                <button id="plusBtn" onClick={this.props.click}>+</button>
            </div>
        );
    }
}

export default Step;