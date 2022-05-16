import Home from './App'
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./modules/Details/Details";

const Routing = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Routing