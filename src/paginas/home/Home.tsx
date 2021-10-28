import React from 'react';
import './Home.css';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@material-ui/icons/Instagram';

function Home() {
    return (
        <div style={{ minHeight: "90vh", marginTop: "10px" }} className="corBackground">
            <Grid container>
                <Grid item xs={6} style={{ minHeight: "90vh", }}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', minHeight: '90vh' }}>
                        <Box p={3} >
                            <Box display="flex" justifyContent="center" className="colorLetras">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }} >
                                    Bem vinde ao meu blog!
                                </Typography>
                            </Box>
                           
                            <Box>
                                <Typography variant="body1" textAlign="center" className="colorLetras" >
                                    <p>Meu nome é Eduardo e estou me tornando um desenvolvedor Java Full-Stack. Essa é a minha primeira experiência com front-end.</p>
                                </Typography>
                                
                                <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Cadastrar tema
                                    </Button>
                                </Box>
                                   
                            </Box>

                        </Box>

                    </Box>

                </Grid>
                <Grid item xs={6} style={{ minHeight: "90vh" }}>

                    <img src="https://i.imgur.com/QRZosza.png" alt="" style={{ width: "100%" }} />
                </Grid>

            </Grid>

        </div>
    );
}

export default Home;