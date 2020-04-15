import React from "react";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";

export default function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const redirect = (url) => () => {
    window.location = url;
  };
  const stocks = ["spy", "amzn"];

  const history = useHistory();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (path) => (event) => {
    console.log(path);
    handleClose();
    history.push(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem divider button onClick={redirect("https://www.google.com/")}>
          Google
        </MenuItem>
        <MenuItem divider button onClick={redirect("https://www.yahoo.com/")}>
          Yahoo
        </MenuItem>
        {stocks.map((stock) => {
          return (
            <MenuItem
              key={stock}
              button
              divider
              onClick={handleClick(`/stock/${stock}`)}
              label="Active"
            >
              {stock}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </div>
  );
}
