import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function RecsMUI (props) {
  let { id } = useParams();
  let { nimi } = useParams();
  let { email } = useParams();


  return (
    <Card>
      <CardHeader
         avatar={ <Avatar><PersonIcon /></Avatar>}
         title={ nimi }
         subheader='6.4.2020' />

      <CardContent>
          <Typography>Id: { id }</Typography>
          <Typography>{ email }</Typography>
      </CardContent>

      <CardActions>
        <Link to='/Listing'><Typography>Takaisin listauksen</Typography></Link>
      </CardActions>
   </Card>
  );
}

export default RecsMUI;
