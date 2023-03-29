import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import theme, { Colors } from "../../styles";
import ActionIcons from './ActionIcons';
import MenuDrawer from './Drawer';


const Header = props => {

  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleButtonClick = pageURL => {
    history.push(pageURL);
	};
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
			<div sx={{bg: "#f3f6f9"}}>
				<AppBar position="static" sx={{bgcolor: Colors.white}} >
					<Toolbar>
						<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }} component="div">
            
							{isMobile ? (
								<>
                  <Box sx={{width: "5%", marginTop: "4px", marginLeft: "10px"}}>
                    <IconButton
                      width="10%"
                      onClick={() => setOpenMenu(true)}
                      size="large"
                      edge="start"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <MenuDrawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                  </Box>
                  <Box sx={{width: "95%", textAlign: "center"}}>
                    <Typography variant="h3" color={Colors.secondary}>
                      Cats & friends
                    </Typography>
                  </Box>
								</>
							) : (
                <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}} component="div">
                  <Box sx={{width: "35%"}}>
                    <Typography variant="h3" color={Colors.secondary} sx={{lineHeight: 1.6}}>
									    Cats & friends
								    </Typography>
                  </Box>
                  <Box sx={{display: "flex", width: "35%", justifyContent: "space-between", alignItems: "center"}}> 
										<Button
                      color="inherit"
											variant="text"
											onClick={() => handleButtonClick("/")}
										>
											HOME
										</Button>
										<Button
                      color="inherit"
											variant="text"
											onClick={() => handleButtonClick("/volonteer")}
										>
											VOLONTEER
										</Button>
										<Button
                      color="inherit"
                      id="dropdown-button"
                      aria-controls={open ? 'dropdown-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="text"
                      onClick={handleDropdownClick}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{textTransform:"uppercase"}}
										>
											Stories
										</Button>
											<Menu
												id="dropdown-menu"
												MenuListProps={{
													'aria-labelledby': 'dropdown-button',
												}}
												anchorEl={anchorEl}
												open={open}
												onClose={handleClose}
												elevation={0}
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'right',
												}}
												transformOrigin={{
													vertical: 'top',
													horizontal: 'right',
												}}
											>
												<MenuItem onClick={handleClose} disableRipple>
													Blog
												</MenuItem>
												<MenuItem onClick={handleClose} disableRipple>
													Podcast
												</MenuItem>
											</Menu>
                      <Button
                        color="inherit"
                        variant="text"
                        onClick={() => handleButtonClick("/login")}
                      >
                        LOGIN
                      </Button>
                    </Box>
                  <ActionIcons sx={{ display: "flex", width: "18%" }} />
                </Box>
							)}
            {isMobile && <ActionIcons p={0} sx={{display: "flex"}} />}
          </Box>
					</Toolbar>
				</AppBar>
			</div>

  );
};

export default Header;
