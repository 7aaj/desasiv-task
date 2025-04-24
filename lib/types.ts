export type BookType = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};
