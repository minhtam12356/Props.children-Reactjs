import React from 'react';
import './App.css';
import Step from './Components/Click';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number : 0
    }
    this.click = this.click.bind(this)
  }

  click(event){
    event.target.textContent === '-' && this.setState({
      number : this.state.number-=1
    })
    event.target.textContent === '+' && this.setState({
      number : this.state.number+=1
    })
  }

  render(){
    let {number} = this.state
    return(
      <div>
        <Step number={number} click={this.click}/> 
      </div>
       
    );
  }
}

export default App;
