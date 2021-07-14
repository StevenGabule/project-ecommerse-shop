import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Button, Table, Row, Col } from "react-bootstrap";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import { PRODUCT } from "../constants/productConstants";
import Paginate from "../components/Paginate";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.page || 1;
  const dispatch = useDispatch();

  const {
    productList: { loading, error, products, page, pages },
    userLogin: { userInfo },
    productDelete: {
      loading: loadingDelete,
      success: successDelete,
      error: errorDelete,
    },
    productCreate: {
      loading: loadingCreate,
      success: successCreate,
      error: errorCreate,
      product: createdProduct,
    },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: PRODUCT.PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <Row className={"align-items-center"}>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className={"text-right"}>
          <Button className={"my-3"} onClick={createProductHandler}>
            <i className={"fas fa-plus"} /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant={"danger"}>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant={"danger"}>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className={"table-sm"}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant={"light"} className={"btn-sm"}>
                          <i className={"fas fa-edit"} />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant={"danger"}
                        className={"btn-sm"}
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i className={"fas fa-trash"} />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
