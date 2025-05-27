import React from "react";
import basket from "./basket.svg";
import globe from "./globe.svg";
import group from "./group.png";
import image from "./image.png";
import logo from "./logo.svg";
import social from "./social.png";
import vector1 from "./vector-1.svg";
import "./style.css";
function Button({ className = "", color = "default", size = "small", vectorClassName = ""  }) {
  // کلاس‌های دکمه بر اساس پراپرتی‌ها
  const classes = `button ${className} color-${color} size-${size} ${vectorClassName}`;

  return (
    <button className={classes} >
    </button>
  );
}
export const MenuVivid = ({ toggleMenu }: { toggleMenu: () => void }): JSX.Element => {
  return (
    <main className="menu-vivid">
      <div className="container">
        <section className="content-panel">
          <article className="card bottle">
            <Button
              className="arrow"
              color="default"
              size="small"
              vectorClassName="button-instance"
            />
            <h2 className="card-title">Bottle</h2>
          </article>

          <article className="card tablets">
            <h2 className="card-title">Tablets</h2>
            <Button
              className="arrow"
              color="default"
              size="small"
              vectorClassName="button-instance"
            />
          </article>

          <nav className="nav-links">
            <button className="nav-button vision">
              <span className="nav-text">Vision</span>
            </button>
            <button className="nav-button science">
              <span className="nav-text">Science</span>
            </button>
            <button className="nav-button revolution">
              <span className="nav-text">Revolution</span>
            </button>
          </nav>

          <div className="switchers">
            <div className="switcher country-switcher">
              <div className="switcher-bg" />
              <img className="icon globe" src={globe} alt="Globe" />
              <span className="switcher-text">United States</span>
              <img className="icon dropdown" src={vector1} alt="Dropdown" />
            </div>

            <div className="switcher language-switcher">
              <div className="switcher-bg" />
              <img className="icon language" src={image} alt="Language" />
              <span className="switcher-text">English</span>
              <img className="icon dropdown" src={vector1} alt="Dropdown" />
            </div>
          </div>

          <footer className="footer">
            <span className="footer-legal">Legals</span>
            <img
              className="footer-social"
              src={social}
              alt="Social media links"
            />
          </footer>
        </section>

        <header className="top-nav">
          <img className="logo" src={logo} alt="Lumivitae Logo" />

          <div className="nav-actions" onClick={()=>{alert("hi")}}>
            <span className="close-text" onClick={()=>{alert("Close")}}>Close</span>

            <div className="menu-icon" onClick={()=>{alert("Close")}}>
              <img src={group} alt="Menu" />
            </div>

            <div className="basket-icon">
              <img src={basket} alt="Basket" />
            </div>
          </div>
        </header>
      </div>
    </main>
  );
};
