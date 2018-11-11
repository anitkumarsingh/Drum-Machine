import React, { Component } from 'react';
import './App.css';
// import Display from './Components/Display/Display';

class App extends Component {
  constructor(){
    super();
    this.state ={
      selectedText:''
    }
  }
  combineFunction = (text) =>{
     switch(text){
       case "Q" :this.setState({selectedText:"Q Sound name"});
                  break;
       case "W" :this.setState({selectedText:"W Sound name"});
                  break;
       case "E" :this.setState({selectedText:"E Sound name"});
                  break;
       case "A" :this.setState({selectedText:"A Sound name"});
                  break;
       case "S" :this.setState({selectedText:"S Sound name"});
                  break;
       case "D" :this.setState({selectedText:"D Sound name"});
                  break;
       case "Z" :this.setState({selectedText:"Z Sound name"});
                  break;
       case "X" :this.setState({selectedText:"X Sound name"});
                  break;
       case "C" :this.setState({selectedText:"C Sound name"});
                  break;
      default: this.setState({selectedText:''});
      
     }
  }
  // QhandleClick = () =>{
  //   this.setState({
  //     selectedText:'Q sound'
  //   })
  // }
  // WhandleClick = () =>{
  //   this.setState({
  //     selectedText:'W sound'
  //   })
  // }
  // EhandleClick = () =>{
  //   this.setState({
  //     selectedText:'E sound'
  //   })
  // }
  // AhandleClick = () =>{
  //   this.setState({
  //     selectedText:'A sound'
  //   })
  // }
  // ShandleClick = () =>{
  //   this.setState({
  //     selectedText:'S sound'
  //   })
  // }
  // DhandleClick = () =>{
  //   this.setState({
  //     selectedText:'D sound'
  //   })
  // }
  // ZhandleClick = () =>{
  //   this.setState({
  //     selectedText:'Z sound'
  //   })
  // }
  // XhandleClick = () =>{
  //   this.setState({
  //     selectedText:'X sound'
  //   })
  // }
  // ChandleClick = () =>{
  //   this.setState({
  //     selectedText:'C sound'
  //   })
  // }
  render() {
    return (
      <div className="App" id="drum-machine">
       <div id="display">{this.state.selectedText}</div>
       <button onClick={(Q)=>this.combineFunction('Q')}>Q</button>
       <button onClick={(W)=>this.combineFunction('W')}>W</button>
       <button onClick={(E)=>this.combineFunction('E')}>E</button><br/>
       <button onClick={(A)=>this.combineFunction('A')}>A</button>
       <button onClick={(S)=>this.combineFunction('S')}>S</button>
       <button onClick={(D)=>this.combineFunction('D')}>D</button><br/>
       <button onClick={(Z)=>this.combineFunction('Z')}>Z</button>
       <button onClick={(X)=>this.combineFunction('X')}>X</button>
       <button onClick={(C)=>this.combineFunction('C')}>C</button>
      </div>
    );
  }
}

export default App;
