import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


const theme = createMuiTheme({
    palette: {
      primary: {main: blueGrey[300], contrastText: '#FFFFFF'},
      secondary: {main: blueGrey[700], contrastText: '#FFFFFF'},
      text: {primary: blueGrey[700], secondary: blueGrey[900], contrastText: '#FFFFFF'},
      action: {hover:  blueGrey[100]},
      background: {default: '#FFFFF'}
    },
    typography: {
      fontFamily: ['Sriracha', 'sans-serif'], 
    },
    overrides: {
      MuiButton: {
        root: {
          color: '#FFFFFF',
          backgroundColor: blueGrey[200],
          '&&:hover': {
            backgroundColor: '#FFFFFF',
            color: blueGrey[400],
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: blueGrey[200] }
        }
      }
    }
  });
  


function Recs(props) {

        return (
            <MuiThemeProvider theme={ theme }>
            <Grid container spacing={4}>
              { props.kengat.map(kenka => {
                 return (
                  <Grid item key={ kenka.id }>
                    <Card style={ {minWidth: 400, minHeight: 200 } }>
                      <CardContent>
                        <Typography variant='h5'>{ kenka.nimi }</Typography>
                        <Typography>{ kenka.maara }</Typography>
                          {kenka.kuva ?
                              <CardMedia
                                  style={ {height: 128, width: 128} }
                                  image={ kenka.kuva }
                                  title={ kenka.nimi } />
                              :
                              <Typography style={ {height: 200, width: 200} }>Ei kuvaa</Typography> }
                      </CardContent>
                     
                    </Card>
                  </Grid>
                )}
              )}
            </Grid>
            </MuiThemeProvider>
          );
        }

export default Recs;
