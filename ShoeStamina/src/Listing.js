import React, { Component } from "react";
import ShoeItems from "./ShoeItems";
import "./Listing.css";

class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 0 
    }
    
    this.nextStep = this.nextStep.bind(this)
  }
  
  nextStep() {
    if(this.state.percentage === 100) return 
    this.setState(prevState => ({ percentage: prevState.percentage + 5 }))
  }
  
  render() {
    return (
      <div>
        
        <h2> Kilometers done </h2>
        <ProgressBar percentage={this.state.percentage}  />
        
        <div style={{ marginTop: '20px' }}>  
          <button 
            onClick={this.nextStep}
           >
            Log run
          </button>  
        </div>   
        
        <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>
          Reset
        </div>
      </div>
    )
  }  
}

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
        
        <Filler percentage={props.percentage}/>
        
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}




class Listing extends Component {

  state = {
    items: [],
    km: "",
    shoes: "",
    link: ""
  };
  
  updateValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  addItem = (e) => {
    var itemArray = this.state.items;
    itemArray.push({
      km: this.state.km,
      shoes: this.state.shoes,
      link: this.state.link
    });

    this.setState({
      items: itemArray,
      km: "",
      shoes: "",
      link: ""
    });
  }
  
  
  render() {
    return (
      <div className="shoelistMain">
        <div className="header"
          onChange={this.updateValue}>
          <input id="km" placeholder="Kilometers run" value={this.state.km}/>
          <input id="shoes" placeholder="Shoes" value={this.state.shoes}/>
          <input id="link" placeholder="Link to shoes" value={this.state.link}/>
          
          <button onClick={this.addItem}>add</button>
        </div>
    
        <ShoeItems entries={this.state.items}/>
        <ProgressBarExample />
      </div>
    );
  }
};



 
export default Listing;
