import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import "./Footer.css";


function Footer(): JSX.Element {
  return (
    <>
      <AppBar style={{ marginTop:"10px" }} position="static" className="colorBackground">
        <Container maxWidth="md">
          <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography>
              
            </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Footer;