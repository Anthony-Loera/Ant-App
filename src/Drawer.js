import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router";
import Axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [stocks, setStocks] = React.useState([]);

  const getStock = () => {
    Axios.get(
      "https://api.iextrading.com/1.0/tops/last?symbols=SPY,BAC,%20CCL,%20NCLH,%20MGM,NVAX,%20AMZN,%20AAPL,%20TSLA,%20DIS"
    ).then((response) => {
      const stocks = response.data;
      setStocks(stocks);
    });
  };
  React.useEffect(getStock, []);

  const handleClick = (path) => () => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List key="drawer">
          {stocks.map((stock) => {
            return (
              <ListItem
                key={stock.symbol}
                divider
                button
                onClick={handleClick(`/stock/${stock.symbol}`)}
              >
                {stock.symbol}
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
