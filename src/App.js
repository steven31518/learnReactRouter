import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, About, NotFound } from "./pages";//pages=>index.js => Home, About, NotFound
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import AlbumSearch from "./pages/AlbumSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path="search" element={<AlbumSearch />}></Route>
            <Route path=":id" element={<AlbumPhoto />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
