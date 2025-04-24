import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("en-US", options);
}

export function cleanDescription(raw: string): string {
  return raw
    ?.replace(/\\u003c/g, "<")
    ?.replace(/\\u003e/g, ">")
    ?.replace(/<[^>]*>/g, ""); // strip HTML
}
