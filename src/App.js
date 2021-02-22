import React from 'react';
import './App.css';
import Report from './Components/complete report';

class App extends React.Component{
  constructor(){
    super();
    this.h2 = 'Cash Diposits'
    this.p = '54.1% less earnings'
  }

  render(){
    return(
      <div>
        <div id='header'>
          <p id="title">Profolio Perfomance</p>
          <button id="view">View all</button>
        </div>
        <div id='body'>
          <Report h2={this.h2} p={this.p}>
            1.7M  
          </Report> 
          <Report h2={this.h2} p={this.p}>
            1.7M  
          </Report> 
          <Report h2={this.h2} p={this.p}>
            1.7M  
          </Report> 
        </div>
        <div id='footer'>
          <button id="complete">View comple report</button>
        </div>
      </div>
       
    );
  }
}

export default App;
