import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { styled } from "@mui/material/styles";
import { Colors } from "../../styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00adb5'
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  components: {
    body: {
      backgroundColor: 'red'
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          fontSize: '1rem',
          fontWeight: 'bold'
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    height: '60px',
    '&:hover': {
      color: '#fff'
    },
  },
  img: {
    display: 'block',
    margin: '0 auto',
    width: '90%',
    height: '90%',
  },
}));

const BannerBlock = styled(Box)(({theme}) => ({
  background: Colors.body_bg,
}));

function Banner() {
  const classes = useStyles();
  return (
    <BannerBlock>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            height: "100%",
            padding: '20px 0px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "center",
            },
          }}>
          <Box>
            <img src="../images/banner-cat1.png" alt="Cat" className={classes.img} />
          </Box>
          <Box
            sx={{
              width: '360px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexDirection: 'column',
              [theme.breakpoints.down("sm")]: {
                width: 'auto',
                padding: '0px 50px'
              },
            }}>
            <Typography variant="subtitle1" sx={{fontSize: '23px'}}>Our motto</Typography>
            <Typography variant="h1" sx={{ fontSize: '50px' }} gutterBottom>
              Help animals
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{marginBottom: '40px'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button variant="contained" className={classes.button}>
              Donate
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </BannerBlock>
  );
}

export default Banner;
