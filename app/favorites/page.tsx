"use client";

import BookSkeleton from "@/components/BookSkeleton";
import StartupCard from "@/components/StartupCard";
import { BookType } from "@/lib/types";
import { GETbookById } from "@/services";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    setFavoriteIds(storedIds);
  }, []);

  const queries = useQueries({
    queries: favoriteIds.map((id) => ({
      queryKey: ["book", id],
      queryFn: () => GETbookById(id),
    })),
  });

  const loading = queries.some((q) => q.isLoading);
  const error = queries.find((q) => q.isError)?.error;
  const books = queries.map((q) => q.data).filter(Boolean) as BookType[];

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Your Favorite Books <br />
          Saved Just for You
        </h1>
        <p className="sub-heading !max-w-w3xl">
          Here are the books you&apos;ve bookmarked. Revisit them anytime and
          keep your personal library growing.
        </p>
      </section>
      {loading ? (
        <div className="section_container p-4">
          <BookSkeleton />
        </div>
      ) : error ? (
        <div className="section_container p-4">Error loading books</div>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section_container">
          {books.map((book) => (
            <StartupCard key={book.id} book={book} query="favorites" />
          ))}
        </div>
      )}
    </>
  );
}
