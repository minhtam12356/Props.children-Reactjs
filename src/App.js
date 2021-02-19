import React from 'react';
import './App.css';
import Click from './Components/Click';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text : "You are amazing :v"
    }
    this.click = this.click.bind(this);
  }

  click(){
    this.state.text.length > 0 && this.setState({
        text : ""
      })    
    this.state.text.length == 0 && this.setState({
        text : "You are amazing :v"
      })
      
  }

  render(){
    const {text} = this.state;
    return(
      <div>
        <Click text={text} click={this.click}/> 
      </div>
       
    );
  }
}

export default App;
