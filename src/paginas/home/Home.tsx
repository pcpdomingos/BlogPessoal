import React from 'react';
import './Home.css';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Home() {
    return (
        <div style={{ minHeight: "90vh", marginTop:"40px" }}>
            <Grid container>
                <Grid item xs={6} style={{ minHeight: "90vh",  }}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', minHeight: '90vh' }}>
                        <Box  p={3} >
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h4" color="initial">
                                Bem vindo ao blog
                            </Typography>
                        </Box>
                        <Box >
                            <Typography variant="body1" color="initial">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, earum cupiditate? Debitis quidem, reiciendis dignissimos perspiciatis molestias molestiae ipsum voluptates ipsam quo non, autem commodi. Consequuntur quod cum unde ratione!
                            </Typography>
                        </Box>

                        </Box>
                        

                    </Box>


                </Grid>
                <Grid item xs={6} style={{ minHeight: "90vh"}}>

                    <img src="https://i.imgur.com/PEHoWQb.png" alt="" style={{width:"100%"}}/>
                </Grid>
              
            </Grid>

        </div>
    );
}

export default Home;