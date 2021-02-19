import React from 'react';
class Click extends React.Component{
    render(){
        const {text} = this.props;
        return(
            <div>
                <button id="toggleMsgBtn" onClick={this.props.click}>Click me</button>
                <div id="msg">{text}</div>
            </div>
        );
    }
}

export default Click;