import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import theme, { Colors } from "../../styles";



function ActionIcons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let width = useMediaQuery(theme.breakpoints.up("lg")) ? "90px" : "30px";

  let navigationBox = isMobile ?
    {
      display: "flex",
      width: "100%",
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 10,
      justifyContent: "center",
      alignItems: "center",
      background: Colors.dove_gray,
      borderTop: "1px solid",
      borderColor: Colors.dark,
      color: Colors.muted,
    }
    :
    {
      flexGrow: 0,
      p: 1,
    };

  let actionIcon = {
    display: "flex",
    color: isMobile && Colors.secondary,
    justifyContent: "center",
    minWidth: width,
  };

  return (
    <>
      <BottomNavigation sx={navigationBox} value={value} onChange={handleChange} >
        <BottomNavigationAction sx={actionIcon} icon={<FavoriteIcon />} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <BottomNavigationAction sx={actionIcon} icon={<PersonIcon />} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <BottomNavigationAction sx={actionIcon} icon={<NotificationsIcon/>} />
      </BottomNavigation>
    </>
  );
}

export default ActionIcons;
