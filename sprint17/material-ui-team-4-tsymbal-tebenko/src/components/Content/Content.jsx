import React from "react";
import { Box, ImageList, Typography, ImageListItem, ImageListItemBar, IconButton} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { Colors } from "../../styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { itemData } from "../data";


function Content() {

  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box pt={3} sx={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h4" color={Colors.shaft}>Waiting for their owners</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: "90%",
            alignSelf: "center",
          }}>
          <ImageList
            variant="masonry"
            cols={phone ? 1 : tablet ? 2 : 3}
            gap={16}>
            {itemData.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                />
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    opacity: "40%",
                    color: Colors.black,
                    "&:hover": {
                      opacity: "90%",
                    },
                    p: 0,
                  }}
                  actionIcon={
                    <IconButton
                      size="small"
                      edge="start"
                      opacity="100%"
                      sx={{
                        color: Colors.dove_gray,
                        "&:hover": {
                          color: Colors.secondary,
                          bgcolor: Colors.shaft,
                        },
                      }}>
                      <FavoriteIcon opacity="100%" />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </>
  );

}

export default Content;