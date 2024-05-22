import { useState } from "react";
import style from "../header/header.module.css";
import LogoMenu from "../../assets/img/logo-menu.svg";
import IconBars from "../../assets/img/menu-togle.svg";
import IconClose from "../../assets/img/menu-closer.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Sobre", link: "/sobre" },
    { name: "Linguagem", link: "/" },
    { name: "Documentação", link: "/" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div>
          <a className={style.logoA} href="/">
            <img src={LogoMenu} alt="Logo sevencode" />
          </a>
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img src={menuActive ? IconClose : IconBars} id={style.menuIcons} alt="Icon Menu" />
        </button>
        <nav className={style.navMenu}>
          <ul className={style.ulWrapper}>
            {links.map((link, index) => (
              <li className={style.navLi} key={link.name}>
                <a href={link.link} className={style.linksMenuLi} key={index}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className={style.navLiButton}>
              <a className={style.loginButton} href="#">
                Login
              </a>
            </li>
						<li className={style.navLiButton}>
              <a className={style.registerButton} href="#">
                Registro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
