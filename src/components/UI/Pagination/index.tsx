import React from "react";
import styles from "../../../../styles/ui/pagination.module.scss";

interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomPagination = ({
  current,
  total,
  pageSize = 10,
  onChange,
  color,
  className,
  style,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== current) {
      onChange && onChange(page);
    }
  };

  const customStyle = {
    ...style,
    ...(color ? { "--pagination-color": color } : {}),
  } as React.CSSProperties;

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (current >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", current - 1, current, current + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className={`${styles.paginationWrapper} ${className || ""}`} style={customStyle}>
      <button
        className={`${styles.pageItem} ${current === 1 ? styles.disabled : ""}`}
        onClick={() => handlePageChange(current - 1)}
        disabled={current === 1}
      >
        &lt;
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`${styles.pageItem} ${current === page ? styles.active : ""}`}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={`${styles.pageItem} ${current === totalPages ? styles.disabled : ""}`}
        onClick={() => handlePageChange(current + 1)}
        disabled={current === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomPagination;
