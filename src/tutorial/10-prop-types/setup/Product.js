import React from "react";

import defaultImage from "../../../assets/default-image.jpeg";

import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  // console.log(image, name, price);
  const url = image && image.url;
  // console.log(url);
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name || "default name"}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
