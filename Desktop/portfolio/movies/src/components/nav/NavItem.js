import { Link } from "react-router-dom";
import { useGlobalContext } from "./../../context";
import { useCallback, memo, useMemo } from "react";
import "./NavItemStyle.css";
const menus = ["home", "popular", "theatre", "comedy", "kids"];

const NavItem = ({ setIsSidebarOpen }) => {
  const { setIndex, setUrl } = useGlobalContext();
  const menuUrls = useMemo(
    () => ({
      home: "/discover/movie?sort_by=popularity.desc&page=",
      popular: "/discover/movie?sort_by=popularity.desc&page=",
      theatre:
        "/discover/movie?primary_release_date.gte=2015-01-01&primary_release_date.lte=2024-12-30&page=",
      comedy:
        "/discover/movie?with_genres=35&cast_with=23659&sor_by=revenue.esc&page=",
      kids: "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=",
    }),
    []
  );

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
