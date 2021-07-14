import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const page = match.params.page || 1;
  const dispatch = useDispatch();

  const {
    productList: { loading, error, products, page: pg, pages },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(listProducts(keyword, page));
  }, [dispatch, keyword, page]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to={"/"} className={"btn btn-light"}>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={pg} keyword={keyword ? keyword : ""} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
