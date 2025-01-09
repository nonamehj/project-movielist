import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Home, Kids, Popular, Comedie, Theatre, Search } from "./pages/";
import SharedLayout from "./pages/SharedLayout";
import {
  // SharedLayoutPopular,
  // SharedLayoutTheatre,
  // SharedLayoutComedie,
  // SharedLayoutKids,
  SharedLayoutSearch,
  SharedLayoutPage,
} from "./sharedLayout";
import SingleMovie from "./pages/SingleMovie";

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    const setMainContainerHeight = () => {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.style.height = `calc(var(--vh) * 100)`;
      }
    };

    const handleResize = () => {
      setViewportHeight();
      setMainContainerHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <main>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<SharedLayoutPage />}>
            <Route index element={<Popular />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="theatre" element={<SharedLayoutPage />}>
            <Route index element={<Theatre />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="kids" element={<SharedLayoutPage />}>
            <Route index element={<Kids />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="comedie" element={<SharedLayoutPage />}>
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
    // </main>
  );
}

export default App;
