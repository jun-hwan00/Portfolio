
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, headerVariant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getHeaderClass = () => {
    let baseClass = '';
    if (headerVariant === 'alt' || location.pathname === '/') {
      baseClass = 'alt';
    } else if (headerVariant === 'style2') {
      baseClass = 'alt style2';
    }
    return baseClass;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header" className={getHeaderClass()}>
        <Link to="/" className="logo">
          <strong>Forty</strong> <span>by HTML5 UP</span>
        </Link>
        <nav>
          <a href="#menu" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>Menu</a>
        </nav>
      </header>

      {/* Menu */}
      <nav id="menu" className={isMenuOpen ? 'visible' : ''}>
        <ul className="links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/landing" onClick={toggleMenu}>Landing</Link></li>
          <li><Link to="/generic" onClick={toggleMenu}>Generic</Link></li>
          <li><Link to="/elements" onClick={toggleMenu}>Elements</Link></li>
        </ul>
        <ul className="actions stacked">
          <li><a href="#" className="button primary fit">Get Started</a></li>
          <li><a href="#" className="button fit">Log In</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      {children}

      {/* Contact Section - 모든 페이지 공통 */}
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="primary" /></li>
                <li><input type="reset" value="Clear" /></li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home"></span>
                <h3>Address</h3>
                <span>1234 Somewhere Road #5432<br />
                Nashville, TN 00000<br />
                United States of America</span>
              </div>
            </section>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;