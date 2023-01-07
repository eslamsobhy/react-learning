import React from "react";
import { Link, useLocation } from "react-router-dom";
const Error = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Error 404 Not Found!</h1>
      <p>The page you requested ({location.pathname}) is not supported!</p>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
