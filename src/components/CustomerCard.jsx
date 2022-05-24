import * as React from 'react'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

import { red } from '@mui/material/colors'

//import { styled } from '@mui/material/styles'

/*const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));*/

const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CustomerCard