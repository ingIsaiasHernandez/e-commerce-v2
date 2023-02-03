import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../../store/slices/purchases.slice";

const Purchases = () => {
  const purchases = useSelector((state) => state.purchases);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  console.log(purchases);

  return (
    <div>
      <Container >
        <Row>
          <Col md="12" lg="12">
            <Table striped size="sm" className="text-center">
              <tbody>
                {purchases.map((purchase) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/product/${purchase.product.id}`}
                  >
                    <tr key={purchase.id}>
                      <td>
                        <img
                        className="m-5"
                          src={purchase.product.images?.[1].url}
                          alt={purchase.product.title}
                          style={{ height: "4rem" }}
                        />
                      </td>

                      <td>
                        <h5 className="m-5">{purchase.product.title}</h5>
                      </td>

                      <td>
                        <h5 className="m-5">$ {purchase.product.price}</h5>
                      </td>
                    </tr>
                  </Link>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <ul></ul>
    </div>
  );
};

export default Purchases;
