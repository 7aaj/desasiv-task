"use client";
import Loading from "@/app/loading";
import StartupCard from "@/components/StartupCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BookType } from "@/lib/types";
import { GETbooksData } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const BookList = ({ q }: { q: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  const { data, isLoading, error } = useQuery({
    queryKey: ["books", q],
    queryFn: () => GETbooksData(q, 0, 40),
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [q]);

  if (isLoading) return <Loading />;
  if (error instanceof Error) return <div>error: {error.toString()}</div>;

  const totalItems = data?.items?.length || 0;
  const totalPages = Math.ceil(totalItems / booksPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <ul className="mt-7 card_grid">
        {data?.items?.length > 0 ? (
          data?.items
            ?.slice(
              (currentPage - 1) * booksPerPage,
              currentPage * booksPerPage
            )
            .map((book: BookType) => (
              <StartupCard key={book.id} book={book} query={q} />
            ))
        ) : (
          <p className="no-results">No books found</p>
        )}
      </ul>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious
              onClick={handlePrevPage}
              className={`px-4 py-2 border rounded transition-colors duration-200
                ${
                  currentPage > 1
                    ? "bg-white text-black hover:bg-gray-100 border-gray-300 cursor-pointer"
                    : "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                }`}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem className="cursor-pointer" key={index + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                key={`page-${index + 1}-${currentPage}`}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className="cursor-pointer">
            <PaginationNext
              onClick={handleNextPage}
              className={`px-4 py-2 border rounded transition-colors duration-200
                ${
                  currentPage < totalPages
                    ? "bg-white text-black hover:bg-gray-100 border-gray-300 cursor-pointer"
                    : "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BookList;
