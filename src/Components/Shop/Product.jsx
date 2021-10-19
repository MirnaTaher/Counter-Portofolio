import { useState, useEffect } from "react";

const Product = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div>
      {product ? (
        <div className="row my-5 justify-content-between align-items-center">
          <figure className="col-4 border p-4 rounded">
            <img src={product.image} alt="product" className="w-100" />
          </figure>
          <div className="col-7 text-start border rounded p-4">
            <p className="fs-5 fw-bold text-primary py-2">{product.title}</p>
            <p>
              <span className="text-primary fs-1-3rem fw-bold">Description: </span>
              {product.description}
            </p>
            <p>
              <span className="text-primary fs-1-3rem fw-bold">Price: </span>
              {product.price} EGP
            </p>
            <p>
              <span className="text-primary fs-1-3rem fw-bold">Ratings: </span>
              {product.rating.rate} 
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
