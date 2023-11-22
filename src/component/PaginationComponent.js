import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // Page numbers are 1-based, not 0-based
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
