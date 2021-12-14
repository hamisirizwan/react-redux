import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

function Checkout() {
  //   const [loading, setLoading] = useState(false);
  //   const params = useParams();
  //   const id = params.productId;
  //   console.log(params.productId);
  //   useEffect(() => {
  //     setLoading(true);
  //     axios
  //       .get(`https://fakestoreapi.com/products/${id}`)
  //       .then((responce) => {
  //         console.log(responce);
  //         setLoading(false);
  //         // dispatch(setProducts(responce.data));
  //       })
  //       .catch((err) => console.log(err.message));
  //   }, []);
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products/2")
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button onClick={fetchData}>get data</button>
      {/* {loading && <Loading />} */}
      <h1>checkout here for</h1>
    </div>
  );
}

export default Checkout;
