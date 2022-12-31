import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieSlug from "./pages/MovueDetail";

function App() {
  return (
    <section className="">
      <div className="container">
        <h2>Movie website</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieSlug />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
