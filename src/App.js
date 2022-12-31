import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieSlug from "./pages/MovueDetail";
import { Link } from "react-router-dom";

function App() {
  return (
    <section className="">
      <div className="container">
        <Link to="/">
          <h2 style={{ marginBottom: "20px" }}>Movie website</h2>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieSlug />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
