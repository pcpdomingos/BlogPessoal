import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Navbar.css"
import { Box } from '@mui/system';

function NavBar(){
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            BlogPessoal
          </Typography>
          <Button color="inherit">Postagens</Button>
          <Button color="inherit">Tema</Button>
          <Button color="inherit">Cadastrar-tema</Button>
          <Button color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
