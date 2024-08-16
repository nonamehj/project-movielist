import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Kids, Popular, Comedie, Theatre, Search } from "./pages/";
import SharedLayout from "./pages/SharedLayout";
import {
  SharedLayoutPopular,
  SharedLayoutTheatre,
  SharedLayoutComedie,
  SharedLayoutKids,
  SharedLayoutSearch,
} from "./sharedLayout";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <main>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="popular" element={<SharedLayoutPopular />}>
              <Route index element={<Popular />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>

            <Route path="theatre" element={<SharedLayoutTheatre />}>
              <Route index element={<Theatre />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>

            <Route path="kids" element={<SharedLayoutKids />}>
              <Route index element={<Kids />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>
            <Route path="comedie" element={<SharedLayoutComedie />}>
              <Route index element={<Comedie />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>
            <Route path="search" element={<SharedLayoutSearch />}>
              <Route index element={<Search />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
