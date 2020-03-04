import React, { Component } from "react";
import ShoeItems from "./ShoeItems";
import "./Listing.css";



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
        
      </div>
    );
  }
};



 
export default Listing;
