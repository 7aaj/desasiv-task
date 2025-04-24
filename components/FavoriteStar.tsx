"use client";

import { Star, StarOff } from "lucide-react";
import { useEffect, useState } from "react";

type FavoriteStarProps = {
  bookId: string;
};

const FavoriteStar = ({ bookId }: FavoriteStarProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    setIsFavorited(favorites.includes(bookId));
  }, [bookId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    let updatedFavorites;

    if (favorites.includes(bookId)) {
      updatedFavorites = favorites.filter((favId: string) => favId !== bookId);
    } else {
      updatedFavorites = [...favorites, bookId];
    }

    localStorage.setItem("favoriteBooks", JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <button
      onClick={toggleFavorite}
      className="text-yellow-500 hover:scale-120 transition-transform cursor-pointer group"
    >
      {isFavorited ? (
        <Star fill="currentColor" size={20} />
      ) : (
        <StarOff
          size={20}
          className="text-gray-400 group-hover:text-yellow-500 transition-colors"
        />
      )}
    </button>
  );
};

export default FavoriteStar;
