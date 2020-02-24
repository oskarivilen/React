import React, { Component } from "react";
 
class ShoeItems extends Component {
    constructor(props) {
        super(props);
     
        this.createShoe = this.createShoe.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
      createShoe(item) {
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
      }
 
  render() {
    var shoeEntries = this.props.entries;
    var listShoes = shoeEntries.map(this.createShoe);
 
    return (
      <ul className="theList">
          {listShoes}
      </ul>
    );
  }
};
 
export default ShoeItems;