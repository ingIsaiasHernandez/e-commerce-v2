import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Row, Container, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCartThunk } from "../../store/slices/cart.slice";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getProductsThunk } from "../../store/slices/products.slice";

const ProductsDetail = ({ cart }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const distpatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const [product, setProduct] = useState({});

  useEffect(() => {
    distpatch(getProductsThunk());

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  // console.log(productList);

  const [rate, setRate] = useState("");

  const addToPurchases = () => {
    const cart = {
      quantity: 1,
      productId: product.id,
    };
    distpatch(addCartThunk(cart));
  };

  return (
    <div>
      <Row>
        <Link to={"/"} style={{ textDecorationLine: "none", color: "white" }}>
          Home
        </Link>
        <p>{product.title}</p>

        <Col lg={9}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w100"
                src={product.images?.[0]?.url}
                alt="First slide"
                style={{ height: 300 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid"
                src={product.images?.[1]?.url}
                alt="First slide"
                style={{ height: 300 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="  img-fluid"
                src={product.images?.[2]?.url}
                alt="First slide"
                style={{ height: 300 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={3}>
          <h3>{product.brand}</h3>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>Price</h3>
          <h3>{product.price}</h3>

          <Button>-</Button>
          {/* <h3>{counter}</h3> */}
          <Button>+</Button>
            
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <Button
            variant="primary"
            className="rounded "
            onClick={addToPurchases}
          >
            Add to product <AiOutlineShoppingCart></AiOutlineShoppingCart>
          </Button>
        </Col>

        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
          <h3 className="text-primary mb-5 mt-5">Discover similar items</h3>
          {productList.map((products) => (
            <Col
              key={products.id}
              onClick={() => navigate(`/product/${products.id}`)}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "30rem",
                  backgroundColor: "white",
                }}
              >
                <Card.Img
                  variant="center"
                  src={products.images[0].url}
                  style={{ height: 200, objectFit: "contain" }}
                />
                <Card.Body style={{ height: "12rem" }} className="mt-4">
                  <Card.Title className="text-muted">
                    {products.brand}
                  </Card.Title>
                  <Card.Title className="mb-5">{products.title}</Card.Title>
                  <Card.Title className="text-muted">Price</Card.Title>
                  <Card.Title>$ {products.price}</Card.Title>
                  <Button
                    variant="primary"
                    className="rounded "
                    style={{
                      position: "absolute",
                      right: "2rem",
                      bottom: "1rem",
                    }}
                  >
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
};

export default ProductsDetail;
