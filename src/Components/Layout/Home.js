import React from "react";
import Data from "../Data/Data";
import MerchData from "../Data/MerchData";
import { Button } from "react-bootstrap";
import Album from "./Album";
import Merch from "./Merch";

const Home = (props) => {
  return (
    <div className="container mt-5">
      <div className="album row justify-content-center  mt-5">
        <h1 className="text-center bold">MUSIC</h1>
        {Data.map((item, index) => {
          return (
            <Album
              title={item.title}
              url={item.imageUrl}
              price={item.price}
              des={item.description}
              key={index}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div className="album row justify-content-center  mt-5">
        <h1 className="text-center bold">MERCH</h1>
        {MerchData.map((item, index) => {
          return (
            <Merch
              title={item.title}
              url={item.imageUrl}
              price={item.price}
              des={item.description}
              key={index}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div onClick={props.onShow} className="text-center m-5">
        <Button variant="info">Cart</Button>{" "}
      </div>
    </div>
  );
};

export default Home;
