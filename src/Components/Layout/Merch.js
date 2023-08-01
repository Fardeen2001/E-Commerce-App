import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCart } from "react-use-cart";

const Merch = (props) => {
  const { addItem } = useCart();
  return (
    <section className="col-5">
      <h2>{props.title}</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body className="d-flex justify-content-between">
          <Card.Text> Rs {props.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              addItem(props.item);
            }}
          >
            Add To cart
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Merch;
