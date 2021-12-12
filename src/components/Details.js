import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Loading from "./Loading";
function Details() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  //   const name = products.allProducts.product[0].title;
  //   console.log(name);
  //   const fetchProducts = async () => {
  //     await axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((responce) => {
  //         console.log(responce);
  //         setLoading(false);
  //         dispatch(setProducts(responce.data));
  //       })
  //       .catch((err) => console.log(err.message));
  //   };
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((responce) => {
        console.log(responce);
        setLoading(false);
        dispatch(setProducts(responce.data));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {products.map((product) => (
          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "400px" }}
          >
            <img
              src={product.image}
              alt="product image"
              style={{ height: "100px" }}
            />
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
