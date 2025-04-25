---

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
- Paginate through search results  

> **Note**: This project leverages new capabilities from **React 19** and **Next.js 15**, including asynchronous Server Components and improved caching and streaming mechanisms to enhance performance and developer experience.

## 🌐 Live Demo

🔗 **[Visit the deployed app on Vercel →](https://desasiv-task.vercel.app/)**

## 🧰 Built Using

- **Next.js App Router (v15)**
- **React 19 features (e.g., async Server Components)**
- **Tanstack Query**
- **Tailwind CSS**
- **shadcn/ui**
- **axios**
- **TypeScript**

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

- `/`: Home page showing a responsive grid of popular books  
- `/books/[id]`: Book detail page with full information  
- `/favorites`: User favorites list  
- **Search**: Performed from the homepage; results update dynamically on the same page  
- **Category filter**: Triggered when the user clicks a category button (shown alongside the "Details" button)

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

## 📦 Deployment

The project can be deployed easily using [Vercel](https://vercel.com):

```bash
vercel deploy
```

Learn more about [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying).

## 📑 License

MIT

---
