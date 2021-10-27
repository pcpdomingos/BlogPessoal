import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Footer() {
    return (
        <>
                    <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Eduardo Domingos
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        </>
    )
}

export default Footer;