import React, { Component } from "react";



class ShoeItems extends Component {
  render() {
    var todoEntries = this.props.entries;
    var listItems = [];

    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      listItems.push(<li key={"item" + i}>
        <a href={entry.link}>{entry.shoes}</a> Kilometers run: {entry.km}
      </li>);
    }

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};
 
export default ShoeItems;
