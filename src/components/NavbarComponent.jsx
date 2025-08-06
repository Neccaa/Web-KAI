import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { navLinks } from "../data/index.js";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY >= 100);
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(loggedIn);
    if (loggedIn && email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/"); // Kembali ke halaman Home
  };

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/src/assets/img/logo-kereta.gif"
            alt="Logo Kereta Api Indonesia"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-grow-1 justify-content-center">
            <Nav className="text-center d-flex flex-column flex-lg-row align-items-center gap-3">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-item-link ${isActive ? "active" : ""} ${changeColor ? "scrolled" : ""}`
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
          </div>

          <div className="ms-auto text-center mt-3 mt-lg-0">
            {isLoggedIn ? (
              <NavDropdown
                title={
                  userEmail
                    ? userEmail.substring(0, 1).toUpperCase() + "***"
                    : "USER"
                }
                id="basic-nav-dropdown"
                align="end"
              >
               <NavDropdown.Item
  onClick={handleLogout}
  className="d-flex align-items-center gap-2 py-2 px-3 text-danger fw-semibold logout-item"
>
  <i className="fa-solid fa-right-from-bracket"></i>
  Keluar
</NavDropdown.Item>

              </NavDropdown>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-outline-dark rounded-1 px-4 me-2"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-dark rounded-1 px-4"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
