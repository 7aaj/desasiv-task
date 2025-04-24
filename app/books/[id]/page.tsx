"use client";

import { use } from "react";
import { GETbookById } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { cleanDescription, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BookDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: () => GETbookById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching book.</p>;
  const bookInfo = data?.volumeInfo;
  const primaryCategory =
    bookInfo?.categories?.[0]?.split(" ")[0].replace(/"/g, "+") ||
    "No Category";

  const categoryQuery = `subject:${primaryCategory}`;

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(bookInfo?.publishedDate)}</p>
        <h1 className="heading">{bookInfo?.title}</h1>
        <p className="sub-heading !max-w-5xl line-clamp-4">
          {bookInfo?.subtitle}
        </p>
      </section>
      <section className="section_container">
        <Image
          src={bookInfo.imageLinks.extraLarge || bookInfo.imageLinks.thumbnail}
          alt="thumb nail"
          className="w-1/2 h-auto mx-auto"
          width={150}
          height={100}
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="category-tag">publisher</p>
            <p
              className="text-20-medium"
              dangerouslySetInnerHTML={{
                __html: cleanDescription(bookInfo?.publisher),
              }}
            />
          </div>
          <div className="flex-between gap-5">
            <Link
              href={bookInfo?.previewLink}
              className="flex gap-2 items-center mb-3"
            >
              <div>
                <p className="text-20-medium">
                  {bookInfo?.authors?.join(", ") || "Unknown Author"}
                </p>
                <p className="text-16-medium !text-black-300">
                  @{bookInfo?.authors?.[0] || "Unknown Author"}
                </p>
              </div>
            </Link>
            <Link
              href={`/?query=SEARCH_TERM+${categoryQuery}`}
              className="text-16-medium category-tag hover:!bg-primary hover:!text-white transition-all duration-500"
            >
              {primaryCategory}
            </Link>
          </div>
          <h3 className="text-30-bold">Book Details</h3>
          {cleanDescription(bookInfo?.description) ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{
                __html: cleanDescription(bookInfo?.description),
              }}
            />
          ) : (
            <p className="no-result ">No details provided</p>
          )}
        </div>
      </section>
    </>
  );
}
