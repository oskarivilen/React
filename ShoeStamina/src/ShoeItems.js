import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';


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
    this.setState(prevState => ({ percentage: prevState.percentage + 1 }))
  }
  
  render() {
    return (
      <Grid   container
      direction="row"
      justify="center"
      alignItems="center">
    
      <div>
        <h2> Kilometers run </h2>
        <h3>{Math.floor((this.state.percentage *5))} / 500</h3>
        
        <ProgressBar percentage={this.state.percentage}  />

        <div style={{ marginTop: '20px' }}>  
        <button 
            onClick={() => {
              if(this.state.percentage > 99.94) return 
              this.setState(prevState => ({ percentage: prevState.percentage + 0.6 }))}}>
           Short run (3km)
          </button>  
          <button 
            onClick={() => {
              if(this.state.percentage > 99) return 
              this.setState(prevState => ({ percentage: prevState.percentage + 1 }))}}>
            Medium run (5km)
          </button>  
          <button 
            onClick={() => {
              if(this.state.percentage > 98) return 
              this.setState(prevState => ({ percentage: prevState.percentage + 2 }))}}>
           Long run (10km)
          </button>  
          <button 
            onClick={() => {
              if(this.state.percentage > 91.6) return 
              this.setState(prevState => ({ percentage: prevState.percentage + 8.4 }))}}>
           Marathon (42km)
          </button> 
        </div>   
        
        <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} 
        onClick={() => this.setState({ percentage: 0 })}>
          Reset
        </div>
        <div style={{marginTop: '10px', color: 'red', marginBottom: '15px'}} 
        onClick={() => this.props.delete(this.props.id)}>
          Delete
        </div>
      </div>
      </Grid>
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
        <a href={entry.link}>{entry.label}</a> | Terrain: {entry.terrain}
        <ProgressBarExample id={entry.id} delete={this.props.delete}/>
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
