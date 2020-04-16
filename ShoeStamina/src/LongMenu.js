import React from 'react';
import Recs from '../src/Recs';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

const data = [ 
  { id: 1, nimi: 'Adidas UltraBoost',
  maara: 'Supported Range: 500km',
  kuva: 'https://a.allegroimg.com/s128/03789b/de4b04bb40dd8525662d0b1ce05f'
},
{ id: 2,
  nimi: 'Nike Freerun',
  maara: 'Supported: 300km',
  kuva: 'https://i.pinimg.com/originals/01/76/34/01763427f2a1237fd4b06e17c2fe8ff4.jpg'
},
{ id: 3,
  nimi: 'New Balance v5',
  maara: 'Supported: 400km',
  kuva: 'https://tshop.r10s.jp/cliffedge/cabinet/1808/18081309_1.jpg?fitin=128:128'
}
];



      

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
   
    return (
      <BrowserRouter>
        
      <div>
    
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 8.5,
              width: 250,
            },
          }}
        >
          
          
          
          <Switch>
          <Route path='/Recs'
                   render={ (props) => <Recs {...props} kengat={ data }/> } />
          </Switch>
          <Link to="/Recs">Shoe Reccommendations</Link>
          <MenuItem><a href='https://www.solescience.ca/how-worn-is-worn-out/'>On Durability</a></MenuItem>
        </Menu>
      </div>
    
      </BrowserRouter>
    );
  }
}



export default LongMenu;
