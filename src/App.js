import "./App.css";
import React from "react";
import End from "./Pages/end";
import Header from "./Pages/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Business from "./Pages/business";
import ViewArticle from "./Pages/view-article";
import AddArticle from "./Pages/AddArticle";
import Article from "./Pages/Article";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/SEF-Academy-Training/" element={<Home />} />
          <Route path="/SEF-Academy-Training/Business/" element={<Business />} />
          <Route path="SEF-Academy-Training/Business/:id/" element={<ViewArticle />} />
          <Route path="/SEF-Academy-Training/AddArticle/" element={<AddArticle />} />
          <Route path="/SEF-Academy-Training/Article/" element={<Article />} />
        </Routes>
        <End />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
