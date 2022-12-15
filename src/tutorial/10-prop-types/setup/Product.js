import React from "react";

import defaultImage from "../../../assets/default-image.jpeg";

import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  return (
    <article className="product">
      {/* <h4>Single product</h4> */}
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: { url: defaultImage },
};

export default Product;
