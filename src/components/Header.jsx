import React, { useState } from 'react'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  titleSpacing: {
    marginLeft: 10,
  }
})

const Header = () => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }} 
            className={classes.titleSpacing}
          >
            My App - FFJS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer 
        open={menuOpen}
        onClose={() => handleToggleMenu()}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de cliente</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}


export default Header