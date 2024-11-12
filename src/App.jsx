import React from "react";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SearchItems from "./components/searchItems/SearchItems";
import NotFound from "./components/404/NotFound";
import FoodSelect from "./components/foodSelect/FoodSelect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FoodSelect />} />
          <Route path="/:idMeal" element={<Details />} />
          <Route path="/search/:query" element={<SearchItems />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
