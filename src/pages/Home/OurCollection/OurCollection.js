import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import SingleCollection from '../SingleCollection/SingleCollection';

const OurCollection = () => {
    const [allBikes, setAllBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllBikes(data))
    }, [])
    return (
        <div>
            <Navigation />
            <Typography sx={{ my: 4 }} variant="h3" gutterBottom component="div">
                Our Collection
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {allBikes.map(bike => <SingleCollection
                            key={bike._id}
                            bike={bike}
                        ></SingleCollection>)}
                    </Grid>

                </Container>
            </Box>
        </div>
    );
};

export default OurCollection;