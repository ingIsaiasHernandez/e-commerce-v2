import React, { useEffect } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCarthunk } from "../store/slices/cart.slice";
import { chekoutPurchasesThunk } from "../store/slices/purchases.slice";

const PurchasesSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCarthunk());
  }, []);

  console.log(cart);
  return (
    <>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table>
            <tbody>
              {cart.map((c) => (
                <tr key={c.id}>
                  <td>
                    <img src={c.product.images[0].url} alt="" className="" />
                  </td>
                </tr>
              ))}

            </tbody>
          </Table>
          <Button onClick={() => dispatch(chekoutPurchasesThunk())}>chekout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PurchasesSidebar;
