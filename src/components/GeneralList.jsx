import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

const GeneralList = ({ items, headers, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(headers[0].key); // Default to the first header key
  const [sortOrder, setSortOrder] = useState("desc"); // Default to descending

  const totalPages = Math.ceil(items.length / pageSize);

  const handleSort = (key) => {
    if (sortField === key) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortField(key);
      setSortOrder("desc"); // Default to descending when changing sort field
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const getSortIcon = (key) => {
    if (key !== sortField) return null;
    return sortOrder === "asc" ? "▲" : "▼";
  };

  return (
    <Box className="general-list">
      {/* List Header */}
      <Box className="general-list-header">
        {headers.map((header) => (
          <Button
            key={header.key}
            onClick={() => handleSort(header.key)}
            style={{ flex: 1, textAlign: "left", padding: "10px" }}
          >
            {header.label} {getSortIcon(header.key)}
          </Button>
        ))}
      </Box>

      {/* List Items */}
      {paginatedItems.map((item, index) => (
        <Box key={index} className="general-list-item">
          {headers.map((header) => (
            <Typography key={header.key} style={{ flex: 1 }}>
              {item[header.key]}
            </Typography>
          ))}
        </Box>
      ))}

      {/* Pagination */}
      <Box className="pagination">
        <Button onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}>
          &lt;
        </Button>
        {getPageNumbers().map((page) => (
          <Button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}>
          &gt;
        </Button>
      </Box>
    </Box>
  );
};

GeneralList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  pageSize: PropTypes.number,
};

GeneralList.defaultProps = {
  pageSize: 10,
};

export default GeneralList;
