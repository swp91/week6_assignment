import Newsmain from "./pages/Newsmain";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDetailPage from "./pages/NewsDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Globalreset />
      <Routes>
        <Route path="/" element={<Newsmain />} />
        <Route path="/news/:publishedAt" element={<NewsDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Globalreset = createGlobalStyle`
  ${reset}`;
