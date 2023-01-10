import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setLoading(false);
    setProducts(products);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};

// using useCallback with fetch:
// we need to add that getProducts method to the dependency array of the useEffect,
// but we will encounter an infinite loop since...
// calling the getProducts will change the state variable value which will trigger the re-render,
// re-rendering will re-create the function from the scratch,
// react thinks the getProducts function changed, so the useEffect calls it again
// and so on...
// The solution is using the useCallback hook...
// don't forget the dependency array of the useCallback (when to execute that function?!)
