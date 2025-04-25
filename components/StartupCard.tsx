import FavoriteStar from "@/components/FavoriteStar";
import { BookType } from "@/lib/types";
import { cleanDescription, formatDate } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartupCard = ({ book, query }: { book: BookType; query: string }) => {
  const {
    id,
    volumeInfo: {
      title,
      authors,
      publishedDate,
      description,
      categories,
      imageLinks: { thumbnail },
    },
  } = book;

  const primaryCategory =
    categories?.[0]?.split(" ")[0].replace(",", "") || "No Category";

  const categoryQuery = `subject:${primaryCategory}`;

  return (
    <li className="startup-card group flex flex-col justify-between group">
      <div className="flex-between ">
        <p className="startup_card_date">{formatDate(publishedDate)}</p>
        <FavoriteStar bookId={id} />
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/books/${id}`}>
            <p className="text-16-medium line-clamp-1">{authors + ","}</p>
          </Link>
          <Link href={`/books/${id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
      </div>
      <Link href={`/books/${id}`}>
        <p className="startup-card_desc"> {cleanDescription(description)}</p>
        <Image
          src={thumbnail}
          alt="book thumbnail"
          width={250}
          height={100}
          className="w-full h-[400px] mx-auto"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${query}+${categoryQuery}`}>
          <p className="text-16-medium category-tag group-hover:!bg-primary group-hover:!text-white  transition-all duration-500">
            {primaryCategory}
          </p>
        </Link>

        <button className="startup-card_btn ml-auto">
          <Link href={`/books/${id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default StartupCard;
