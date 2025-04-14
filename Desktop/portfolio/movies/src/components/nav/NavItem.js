import { Link } from "react-router-dom";
import { useGlobalContext } from "./../../context";
import { useCallback, memo, useMemo } from "react";
import "./NavItemStyle.css";
const menus = ["home", "popular", "theatre", "kids", "comedie"];

const NavItem = ({ setIsSidebarOpen }) => {
  const { setIndex, setUrl } = useGlobalContext();
  const menuUrls = useMemo(
    () => ({
      home: "/discover/movie?sort_by=popularity.desc&page=",
      popular: "/discover/movie?sort_by=popularity.desc&page=",
      theatre:
        "/discover/movie?primary_release_date.gte=2015-01-01&primary_release_date.lte=2024-12-30&page=",
      kids: "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=",
      comedie:
        "/discover/movie?with_genres=35&cast_with=23659&sor_by=revenue.esc&page=",
    }),
    []
  );
  // const getPage = useCallback(
  //   (page) => {
  //     let url = "";
  //     setIndex(1);
  //     setIsSidebarOpen(false);
  //     if (page === "home") {
  //       url = "/discover/movie?sort_by=popularity.desc&page=";
  //     }
  //     if (page === "popular") {
  //       url = "/discover/movie?sort_by=popularity.desc&page=";
  //     }

  //     if (page === "theatre") {
  //       url =
  //         "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2023-11-10&page=";
  //     }
  //     if (page === "kids") {
  //       url =
  //         "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=";
  //     }
  //     if (page === "comedie") {
  //       url =
  //         "/discover/movie?with_genres=35&cast_with=23659&sor_by=revenue.esc&page=";
  //     }

  //     return setUrl(url);
  //   },
  //   [setIndex, setUrl]
  // );
  const getPage = useCallback(
    (page) => {
      setIndex(1);
      setIsSidebarOpen(false);
      return setUrl(menuUrls[page]);
    },
    [setIndex, setUrl, setIsSidebarOpen, menuUrls]
  );
  return (
    <>
      {menus.map((menu) => {
        return (
          <li key={menu}>
            {menu === "home" ? (
              <Link to="/" onClick={() => getPage(menu)}>
                {menu}
              </Link>
            ) : (
              <Link to={menu} onClick={() => getPage(menu)}>
                {menu}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

export default memo(NavItem);
