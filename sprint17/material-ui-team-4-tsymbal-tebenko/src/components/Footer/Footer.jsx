import { Typography, Grid, Box, ListItemText, List, Link} from "@mui/material";
import React from "react";
import { Colors } from "../../styles";
import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Title = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
}));

function Footer() {
  return (
    <Box
      display={"flex"}
      padding={3}
      bgcolor={Colors.shaft}
      color={Colors.dove_gray}>
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignSelf={"center"}>
        <Grid item md={12} lg={6}>
          <Title variant="body1" mb={2}>
            About us
          </Title>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}>
            <Link href="#" color="inherit">
              <FacebookIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="#" color="inherit">
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Title variant="body1">Information</Title>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">Lorem ipsum</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">Privacy &amp; Policy</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">Terms &amp; Conditions</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Title variant="body1">My account</Title>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">Initiatives and projects</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">Favorite animals</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" color="inherit">My Account</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;