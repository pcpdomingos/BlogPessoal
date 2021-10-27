import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Navbar.css"
import Box from '@mui/material/Box';

function NavBar() {
  return (
    <div>
      <AppBar className="colorAppBar" position="static">
        <Toolbar>
          <Box>
            <Typography variant="h6">
              BlogPessoal
            </Typography>
          </Box>

          <Box ml="auto" className="colorBottom">
            <Button className="colorText">Postagens</Button>
            <Button className="colorText">Temas</Button>
            <Button className="colorText">Login</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
