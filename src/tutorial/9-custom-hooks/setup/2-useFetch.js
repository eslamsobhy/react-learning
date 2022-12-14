import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setLoading(false);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
