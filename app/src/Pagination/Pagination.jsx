import React, { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";

const Pagination = () => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const json = await data.json();

      setProducts(json?.products);
    } catch (err) {
      console.log(err);
    }
  };

  // const MIN_PRODUCTS = 10;
  // const totalProducts = products.length;
  // const start = "";
  // const end = "";

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log([...Array(10).keys()]);

  return (
    <div>
      {!products.length ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="pagination">
            {[...Array(10).keys()].map((n) => {
              return <span className="num">{n}</span>;
            })}
          </div>
          <div className="flex">
            {products?.slice(0, 10).map((x) => {
              return (
                <PaginationCard
                  key={x.id}
                  title={x.title}
                  description={x.description}
                  thumbnail={x.thumbnail}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
