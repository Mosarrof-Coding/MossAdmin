"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function PaginationNumbers({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i <= 5 || i === totalPages) {
      pages.push(i);
    } else if (i === 6) {
      pages.push("ellipsis");
    }
  }

  return (
    <>
      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span key={"ellipsis"} className="px-2 text-gray-500 select-none">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`px-3 py-1 rounded-md border text-sm font-medium ${
              currentPage === page
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {page}
          </button>
        )
      )}
    </>
  );
}

function PaginationWithText({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className="inline-flex items-center space-x-1" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border text-sm font-medium ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
      >
        Previous
      </button>

      <PaginationNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border text-sm font-medium ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
      >
        Next
      </button>
    </nav>
  );
}

function PaginationWithTextAndIcon({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className="inline-flex items-center space-x-1" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 py-1 rounded-md border text-sm font-medium ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <PaginationNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-3 py-1 rounded-md border text-sm font-medium ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

function PaginationWithIconOnly({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className="inline-flex items-center space-x-1" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md border ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <PaginationNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md border ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}

const Pagination = () => {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(1);
  const totalPages = 10;

  return (
    <main className="space-y-4 mx-auto p-3 md:p-5 max-w-4xl">
      <div className="space-y-2">
        <h1 className="font-bold text-3xl tracking-tight">Pagination</h1>
        <nav className="space-x-2 text-indigo-600 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          /<span className="font-semibold">Pagination</span>
        </nav>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl">Pagination with Text</h2>
        <PaginationWithText
          currentPage={page1}
          totalPages={totalPages}
          onPageChange={setPage1}
        />
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl">Pagination with Text and Icon</h2>
        <PaginationWithTextAndIcon
          currentPage={page2}
          totalPages={totalPages}
          onPageChange={setPage2}
        />
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl">Pagination with Icon</h2>
        <PaginationWithIconOnly
          currentPage={page3}
          totalPages={totalPages}
          onPageChange={setPage3}
        />
      </section>
    </main>
  );
};
export default Pagination;
