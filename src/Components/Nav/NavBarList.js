import React from "react";
import { Link } from "react-router-dom";

function NavBarList({ LinkUrl, LinkName }) {
  return (
    <div>
      <li className="nav_item">
        <Link className="nav__items" to={LinkUrl}>
          {LinkName}
        </Link>
      </li>
    </div>
  );
}

 <Link to="https://www.netflix.com/browse">Home</Link>
        <Link to="https://www.netflix.com/browse/genre/83">Series</Link>
        <Link to="https://www.netflix.com/browse/genre/34399">Films</Link>
        <Link to="https://www.netflix.com/latest">New & Popular</Link>
        <Link to="https://www.netflix.com/browse/my-list">MyList</Link>
        <Link to="https://www.netflix.com/browse/original-audio">
          Browse by Languages
        </Link>
export default NavBarList;
