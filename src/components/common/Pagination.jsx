import React, { useState } from "react";
import PaginationButton from "./PaginationButton";
import styles from '@/style/common/Pagination.module.css';
import Image from "./Image";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const [showFirstPage, setShowFirstPage] = useState(currentPage);
  const morePageLimit = 5;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const handlePagination = (page) => {
    handleScrollToTop();
    setCurrentPage(page);

    if (totalPages >= morePageLimit && page === totalPages) {
      setShowFirstPage(totalPages - morePageLimit);
    }
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;

    if (prevPage >= 1) {
      handleScrollToTop();
      setCurrentPage(prevPage);

      if (prevPage < showFirstPage) {
        setShowFirstPage((prev) => Math.max(prev - 1, 1));
      }
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage <= totalPages) {
      handleScrollToTop();
      setCurrentPage(nextPage);

      if (nextPage > showFirstPage + morePageLimit - 1) {
        setShowFirstPage((prev) =>
          Math.min(prev + 1, totalPages - morePageLimit + 1)
        );
      }
    }
  };

  const pageButtons = Array.from(
    { length: Math.min(morePageLimit, totalPages - showFirstPage + 1) },
    (_, i) => {
      const page = showFirstPage + i;

      return (
        <PaginationButton
          key={page}
          page={page}
          children={<p>{page}</p>}
          disabled={false}
          currentPage={currentPage}
          onClick={() => handlePagination(page)}
        />
      );
    }
  );

  const arrowIcon = (
    <Image src="/assets/blog/arrow_icon.png" alt="arrow icon" />
  );
  const moreChildren = (
    <Image src="/assets/blog/more_icon.png" alt="more icon" />
  );

  return (
    <div className={styles.pagination}>
      <PaginationButton
        children={arrowIcon}
        disabled={false}
        currentPage={currentPage}
        onClick={() => handlePrev()}
      />
      {pageButtons}
      {totalPages > morePageLimit &&
        showFirstPage + morePageLimit < totalPages && (
          <PaginationButton
            children={moreChildren}
            disabled={true}
            currentPage={currentPage}
            onClick={(e) => e.preventDefault()}
          />
        )}
      {totalPages > morePageLimit &&
        showFirstPage + morePageLimit < totalPages + 1 && (
          <PaginationButton
            page={totalPages}
            children={<p>{totalPages}</p>}
            disabled={false}
            currentPage={currentPage}
            onClick={() => handlePagination(totalPages)}
          />
        )}
      <PaginationButton
        children={arrowIcon}
        disabled={false}
        currentPage={currentPage}
        onClick={() => handleNext()}
      />
    </div>
  );
}
