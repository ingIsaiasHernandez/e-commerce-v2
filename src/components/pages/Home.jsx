import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  InputGroup,
  Row,
  Form,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterNewProductsThunk,
  filterProductsCategoryThunk,
  getProductsThunk,
} from "../../store/slices/products.slice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);

  const [searchProduct, setSearchProduct] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // console.log(searchProduct);

  return (
    <div>
      <Row>
        <InputGroup className="mb-5 " size="md">
          <Form.Control
            placeholder="Search product"
            aria-label="Search products"
            aria-describedby="basic-addon2"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <Button
            onClick={() =>
              dispatch(filterNewProductsThunk(searchProduct.toString()))
            }
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>

        <Col md={3} lg={2}>
          <ListGroup className="mb-5 text-center">
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() =>
                  dispatch(filterProductsCategoryThunk(category.id))
                }
                style={{ cursor: "pointer" }}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={9}>
          
            <Row xs={1} md={2} lg={3} className="g-4">
              {productList.map((products) => (
                <Col
                  key={products.id}
                  onClick={() => navigate(`/product/${products.id}`)}
                >
                  <Card style={{ width: "18rem" ,height: "30rem", backgroundColor: "white"}}>
                    <Card.Img
                      variant="center"
                      src={products.images[0].url}
                      style={{ height: 200, objectFit: "contain" }}
                    />
                    <Card.Body style={{height: "12rem"}}className="mt-4">
                      <Card.Title className="text-muted">{products.brand}</Card.Title>
                      <Card.Title className="mb-5">{products.title}</Card.Title>
                      <Card.Title className="text-muted">Price</Card.Title>
                      <Card.Title >$ {products.price}</Card.Title>
                      <Button variant="primary" className="rounded " style={{position: "absolute", right: "2rem", bottom: "1rem" }} >
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        
        </Col>
      </Row>

    </div>
  );
};

export default Home;
