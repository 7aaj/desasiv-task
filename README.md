# desasiv-task

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📚 Overview

The **desasiv-task** application is a Book Explorer that allows users to:

- Browse popular books
- Search for books by title or author
- View detailed information on selected books
- Mark books as favorites using localStorage
- Filter books by category
- Navigate with dynamic routing
- Enjoy a responsive, mobile-friendly UI
- Toggle between dark and light themes
- Paginate through search results ([diveshadivarekar/Task-Assist: personal planner - GitHub](https://github.com/diveshadivarekar/Task-Assist?utm_source=chatgpt.com), [Source control - Azure Data Factory | Microsoft Learn](https://learn.microsoft.com/en-us/azure/data-factory/source-control?utm_source=chatgpt.com), [About task lists - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists?utm_source=chatgpt.com))

Built using:

- **Next.js App Router**
- **Tanstack Query**
- **Tailwind CSS** ([Manage your repository visibility, rules, and settings](https://resources.github.com/learn/pathways/administration-governance/essentials/manage-your-repository-visibility-rules-and-settings/?utm_source=chatgpt.com), [Source control - Azure Data Factory | Microsoft Learn](https://learn.microsoft.com/en-us/azure/data-factory/source-control?utm_source=chatgpt.com))

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧩 Project Structure

- `/`: Home page showing a responsive grid of popular books.
- `/books/[id]`: Book detail page with full information.
- `/favorites`: User favorites list.
- **Search**: Performed from the homepage; results update dynamically on the same page.
- **Category filter**: Triggered when the user clicks a category button (shown alongside the "Details" button). ([Source control - Azure Data Factory | Microsoft Learn](https://learn.microsoft.com/en-us/azure/data-factory/source-control?utm_source=chatgpt.com))

## 🔍 Features

- ✅ Responsive grid layout for book display
- ✅ Dynamic routing for book detail pages
- ✅ Search functionality (on same page)
- ✅ Favorites functionality via localStorage
- ✅ Loading and error states for all API calls
- ✅ Category filter buttons per book (filters by category)
- ✅ Tailwind CSS-based styling
- ✅ Clean code and modular structure
- ✅ Pagination for search results
- ✅ Dark/light theme toggle

## 🔗 API Reference

Data is sourced from the **Google Books API**:

- Search: `https://www.googleapis.com/books/v1/volumes?q=SEARCH_TERM`
- Book by ID: `https://www.googleapis.com/books/v1/volumes/BOOK_ID`

No authentication key required for basic queries.

## 🛠 Technologies Used

- [Next.js](https://nextjs.org/)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Books API](https://developers.google.com/books/)

## 📦 Deployment

The project can be deployed easily using [Vercel](https://vercel.com):

```bash
vercel deploy
```

Read more on [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying).

## 📑 License

MIT

---

Feel free to replace the existing `README.md` in your repository with this updated version. If you need assistance with creating screenshots or GIFs to enhance the README, or if you have any other questions, feel free to ask!
