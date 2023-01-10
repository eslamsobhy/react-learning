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

  // useCallback:
  // is the value of that function changed? if so, re-create the function!
  // if not, do not re-create it!
  // the dependency array is needed just like in useEffect,because we need to call it..
  // ..each time the cart changes, not just after the first render

  // we encountered the same problem again, because react thinks that by calling the addToCart method
  // we are recreating it again, thus the props changed, thus the component re-renders!

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // the most expensive item from data
  const getMostExpensive = (data) => {
    console.log("the function is being re-created!");
    const mostExpensive = data.reduce((total, item) => {
      if (item.fields.price > total) {
        total = item.fields.price;
      }
      return total;
    }, 0);
    return mostExpensive / 100;
  };

  // memoizing the value of the function, until the param changes
  const mostExpensive = useMemo(() => getMostExpensive(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ margin: "20px" }}> Cart: {cart}</h1>
      <h1>Most Expensive: ${mostExpensive}</h1>
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
