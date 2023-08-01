import React from "react";
import classes from "./CartPortal.module.css";
import Modal from "../../UI/Modal";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

const CartPortal = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Modal onClick={props.onHide} className={classes.modal}>
      <h2 className={classes.cartTitle}>Cart</h2>
      <div onClick={props.onHide} className={classes.closeBtn}>
        X
      </div>
      <div className={classes.lables}>
        <span className={classes.lable1}>ITEM</span>
        <span className={classes.lable2}>PRICE</span>
        <span className={classes.lable3}>QUANTITY</span>
      </div>
      {isEmpty && <h3>Your Cart Is Empty</h3>}
      <table
        className="table table-light table-hover m-0   table-sm table-responsive"
        id="dtVerticalScrollExample"
      >
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt="ii"
                    style={{ height: "6rem" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Quantity {item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.totalAmount}>
        <span>{cartTotal}</span> Total Amount Rs
      </div>
      <div className={classes.purchaseBtn}>
        <Button variant="info" onClick={emptyCart}>
          Purchase
        </Button>
      </div>
    </Modal>
  );
};

export default CartPortal;