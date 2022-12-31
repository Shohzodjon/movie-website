import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const NewsCard = (props) => {
  return (
    <div style={{ padding: "20" }}>
      <a href={props.url}>
        {props.title} by {props.author}
      </a>
    </div>
  );
};
export default NewsCard;
