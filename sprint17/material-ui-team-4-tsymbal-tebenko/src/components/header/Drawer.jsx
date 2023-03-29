import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../../styles";

function MenuDrawer(props) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { openMenu, setOpenMenu } = props
  return (
    <>
      <Box>
        <Drawer
          anchor="left"
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <Box p={2} width="250px" role="presentation" textAlign="center">
            <List>
              <ListItemButton>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemText>Volonteer</ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <Accordion
                  expanded={expanded === "panel"}
                  onChange={(event, isExpanded) => handleChange(isExpanded, "panel")}
                >
                  <AccordionSummary
                    id="panel-header"
                    expandIcon={<ExpandMoreIcon sx={{color: Colors.dove_gray}}/>}
                    sx={{pl: 0}}
                  >
                    <Typography>Stories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <ListItemButton>
                      <ListItemText>Blog</ListItemText>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemText>Podcast</ListItemText>
                    </ListItemButton>
                  </AccordionDetails>
                </Accordion>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemText>Login</ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
              <Divider />
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default MenuDrawer;
