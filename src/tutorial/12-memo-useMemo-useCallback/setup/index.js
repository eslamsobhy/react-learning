import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // we encountered the same problem again, because react thinks that by calling the addToCart method
  // we are recreating it again, thus the props changed, thus the component re-renders!
  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("The big list rerendered");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single product rerendered!");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </article>
  );
};
export default Index;
