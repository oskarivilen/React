import React, { Component } from "react";


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


class ShoeItems extends Component {
  render() {
    var shoeEntries = this.props.entries;
    var listItems = [];

    for (var i = 0; i < shoeEntries.length; i++) {
      var entry = shoeEntries[i];
      listItems.push(<li key={"item" + i}>
        <a href={entry.link}>{entry.shoes}</a> || Kilometers run: {entry.km}
        <ProgressBarExample />
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
