import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import ShoeItems from "./ShoeItems";
import "./Listing.css";
import LongMenu from "./LongMenu";
import axios from 'axios';

const url = 'http://localhost:8080';


class Listing extends Component {

  
  
  state = {
    items: [],
    terrain: "",
    shoes: "",
    viesti:"",
  };

     //LISÄTTY
 componentDidMount() {
  this.getList();
}
//LISÄTTY
getList = () => {
  fetch(url + '/shoe/all')
  .then(res => res.json())
  .then(list => this.setState({ items: list }))
  .catch(error => console.log("Error in getList"));
}

  addShoe = (e) => {
    

    const formData = new FormData();
    formData.append('terrain', this.state.terrain);
    formData.append('label', this.state.shoes);
    

    axios.post(url + '/shoe/add', formData)
    .then(response => {
      if (response.status === 200) {
        this.setState({ shoes: "", terrain: "", viesti: "Shoe added successfully"})
        this.getList()
      } else {
        this.setState({ viesti: "Shoe couldn't be added" })
      }
    })
 }

 deleteShoe = (id) => {
    console.log(id)
  fetch(`http://localhost:8080/shoe/delete/${id}`,{method: 'delete'})
  .then(()=>this.getList()) 
  .catch(error => console.log("Error in delete"));

}
  updateValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  addItem = (e) => {
    var itemArray = this.state.items;
    itemArray.push({
      terrain: this.state.terrain,
      shoes: this.state.shoes,
    });

    this.setState({
      items: itemArray,
      terrain: "",
      shoes: ""
    });
   this.addShoe();
  }
  
  
  render() {
    return (
      
      <div className="shoelistMain">
        <div className="longmenu">
        <LongMenu></LongMenu>
        </div>
        <div className="header">
            
          <input id="terrain" placeholder="Running Terrain" onChange={this.updateValue} value={this.state.terrain}/>
          <input id="shoes" placeholder="Shoes" onChange={this.updateValue} value={this.state.shoes}/>
          
          <button onClick={this.addItem}>add</button>
        </div>
        
        <ShoeItems entries={this.state.items} delete={this.deleteShoe}/>
        
        <Typography>{ this.state.viesti }</Typography>
      </div>
      
    );
  }
};



 
export default Listing;
