import React from "react";

function FirstPageButton({ onClick, currentPage }) {
  return (
    <button
      className="pagination-button first-last"
      onClick={() => onClick(1)}
      disabled={currentPage === 1}
    >
      First
    </button>
  );
}

function LastPageButton({ onClick, currentPage, totalPages }) {
  return (
    <button
      className="pagination-button first-last"
      onClick={() => onClick(totalPages)}
      disabled={currentPage === totalPages}
    >
      Last
    </button>
  );
}

function PrevButton({ onClick, currentPage }) {
  return (
    <button
      className="pagination-button prev-next"
      onClick={() => onClick(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </button>
  );
}

function PageButton({ pageNumber, isActive, onClick }) {
  return (
    <button
      className={`pagination-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(pageNumber)}
      disabled={isActive}
    >
      {pageNumber}
    </button>
  );
}

function NextButton({ onClick, currentPage, totalPages }) {
  return (
    <button
      className="pagination-button prev-next"
      onClick={() => onClick(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  );
}

function Pagination({ currentPage, handlePageChange, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      {currentPage > 1 && <FirstPageButton onClick={handlePageChange} currentPage={currentPage} />}
      {currentPage > 1 && <PrevButton onClick={handlePageChange} currentPage={currentPage} />}
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          pageNumber={pageNumber}
          isActive={currentPage === pageNumber}
          onClick={handlePageChange}
        />
      ))}
      {currentPage < totalPages && (
        <NextButton onClick={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      )}
      {currentPage < totalPages && <LastPageButton onClick={handlePageChange} currentPage={currentPage} totalPages={totalPages} />}
    </div>
  );
}

export default Pagination;
