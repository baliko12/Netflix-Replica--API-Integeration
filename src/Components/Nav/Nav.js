import React, { useState, useEffect } from "react";
import "./Nav.css";
import Notification from "./notification.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav banner__fadeTop ${show && "nav__black"}`}>
      <div className="left-side">
        <img
          className="nav__logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
          alt="Netflix Logo"
        />
        <div className="nav-items">
          <ul>
            <li>
              <a href="https://www.netflix.com/browse">Home</a>
              <a href="https://www.netflix.com/browse/genre/83">Series</a>
              <a href="https://www.netflix.com/browse/genre/34399">Films</a>
              <a href="https://www.netflix.com/latest">New & Popular</a>
              <a href="https://www.netflix.com/browse/my-list">MyList</a>
              <a href="https://www.netflix.com/browse/original-audio">
                Browse by Languages
              </a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <div>
            <input
              className="search-bar"
              id="quick_search"
              name="quick_search"
              placeholder="Title, people, genres"
              type="text"
            />
          </div>

          <div>
            <ul>
              <li className="last-list">
                <a href="https://www.netflix.com/Kids">Children</a>
                <a href="https://dvd.netflix.com/Subscribe/EnableDvd/Address?dsrc=STRWEB_NAV">
                  DVD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar logo"
        />

        <a href="/">
          <img
            className="nav__notification"
            src={Notification}
            alt="notification-png"
          />
        </a>
      </div>
    </div>
  );
}

export default Nav;
