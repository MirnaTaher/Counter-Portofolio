import { useState, useEffect } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <section className="row justify-content-between py-5">
      {products && products.length > 0 ? (
        products.map((product) => {
          return (
            <div key={product.id} className="col-4 p-3">
              <Link to={`/shop/${product.id}`} className="text-decoration-none">
                <div className="border rounded h-30rem p-3 shadow-sm">
                  <figure className="h-13 px-2 border-box">
                    <img src={product.image} alt="product" />
                  </figure>
                  <div>
                    <p className="fs-5 fw-bold text-primary py-2">
                      {product.title}
                    </p>
                    <p className="text-start">
                      <span className="fs-1-3rem fw-bold">
                        Price: </span><span className="text-dark">{product.price} EGP</span>
                    </p>
                    <p className="text-start">
                      <span className="fs-1-3rem fw-bold">Ratings: </span><span className="text-dark">{product.rating.rate}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
