import React from "react";
import PropTypes from "prop-types";

const PageInfo = ({ data }) => {
  return (
    <div className="main-page-header">
      <h2>{data.header}</h2>
      <p>{data.text}</p>
    </div>
  );
};

PageInfo.propTypes = {
  data: PropTypes.shape().isRequired
};

export default PageInfo;
