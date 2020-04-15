import React from "react";
import Axios from "axios";
import Card from "@material-ui/core/Card";
import { useParams } from "react-router";

/****************************
 Get Stock Price
****************************/
export default function Stock() {
  const [stock, setStock] = React.useState();
  const { symbol } = useParams();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  const getStock = () => {
    Axios.get(
      "https://api.iextrading.com/1.0/tops/last?symbols=" + symbol
    ).then((response) => {
      const stocks = response.data;
      setStock(stocks[0]);
    });
  };

  React.useEffect(getStock, [symbol]);

  /****************************
 Display Stock
****************************/

  if (stock) {
    return (
      <div className="price">
        <Card style={{ width: 300 }}>
          <h1>
            {stock.symbol}
            {formatter.format(stock.price)}
          </h1>
        </Card>
      </div>
    );
  }
  return <h1>Loading...</h1>;
}
