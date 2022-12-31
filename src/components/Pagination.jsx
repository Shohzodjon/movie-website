import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieCard from "./MovieCard";
const Pagination = (props) => {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <MovieCard data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
