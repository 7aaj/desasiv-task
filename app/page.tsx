import BookList from "@/components/BookList";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  console.log(await searchParams);
  const subjectMatch = query?.match(/subject:([^\s]+)/);
  const subject = subjectMatch ? subjectMatch[1] : null;

  const cleanQuery = query
    ?.replace(/SEARCH_TERM/gi, "")
    ?.replace(/subject:[^\s]+/gi, "")
    ?.trim();

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Explore Your Next Great Read, <br />
          Find the best books
        </h1>
        <p className="sub-heading !max-w-w3xl">
          Browse through a curated collection of popular books and find your
          next favorite.
        </p>
        <SearchForm query={cleanQuery} />
      </section>
      <section className="section_container ">
        <div className="flex items-center justify-between w-full">
          <p className="text-30-semibold">
            {cleanQuery
              ? `Search results for "${cleanQuery}"`
              : "Popular Books"}
          </p>

          {subject && <span className="category-tag">{subject}</span>}
        </div>
        <BookList q={query || "SEARCH_TERM"} />
      </section>
    </>
  );
}
