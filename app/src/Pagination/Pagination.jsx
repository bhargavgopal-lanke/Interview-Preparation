import React, { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";

const Pagination = () => {
  const [products, setProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=500");
      const json = await data.json();

      setProducts(json?.products);
    } catch (err) {
      console.log(err);
    }
  };

  const PAGE_SIZE = 10;
  const noOfPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentPage((prevState) => prevState - 1);
  };
  const handleNext = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <div>
      {!products.length ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="pagination">
            <button
              className=""
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              ◀️
            </button>
            {[...Array(noOfPages).keys()].map((n) => {
              return (
                <span
                  className={currentPage === n ? "num active" : "num"}
                  onClick={() => setCurrentPage(n)}
                >
                  {n}
                </span>
              );
            })}
            <button
              onClick={handleNext}
              disabled={currentPage === noOfPages - 1}
            >
              ▶️
            </button>
          </div>
          <div className="flex">
            {products?.slice(start, end).map((x) => {
              return (
                <PaginationCard
                  key={x.id}
                  title={x.title}
                  description={x.description}
                  thumbnail={x.thumbnail}
                  noOfPages={noOfPages}
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
