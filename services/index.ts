import APIService from "./api";

export const GETbooksData = async (
  q: string,
  startIndex: number,
  maxResults: number
) => {
  const response = await APIService.fetchData({
    method: "GET",
    params: { q, startIndex, maxResults },
  });
  return response;
};

export const GETbookById = async (id: string) => {
  const response = await APIService.fetchData({
    url: `/${id}`,
    method: "GET",
  });
  return response;
};
