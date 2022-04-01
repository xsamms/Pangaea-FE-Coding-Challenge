import React from "react";
import { useQuery } from "@apollo/client";
import { getProducts } from "../gql/Query";

const Products = () => {
  const { loading, error, data } = useQuery(getProducts);
  console.log(data);

  return (
    <section className="products">
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="product-panel">
          {data.products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div>
                  <img src={product.image_url} alt="" />
                </div>
                <h4>{product.title}</h4>
                <p>From: ${product.price}</p>
                <button>Add To Cart</button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Products;
