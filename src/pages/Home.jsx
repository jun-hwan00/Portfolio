import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout"

const Home = () => {
  const handleScrollTo = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout headerVariant="alt">
      {/* Banner */}
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>A responsive site template designed by HTML5 UP<br />
            and released under the Creative Commons.</p>
            <ul className="actions">
              <li>
                <button 
                  onClick={() => handleScrollTo('#one')}
                  className="button next scrolly"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main */}
      <div id="main">
        {/* One - Tiles */}
        <section id="one" className="tiles">
          <article>
            <span className="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Aliquam</Link></h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic02.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Tempus</Link></h3>
              <p>feugiat amet tempus</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic03.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Magna</Link></h3>
              <p>Lorem etiam nullam</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Ipsum</Link></h3>
              <p>Nisl sed aliquam</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic05.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Consequat</Link></h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic06.jpg" alt="" />
            </span>
            <header className="major">
              <h3><Link to="/landing" className="link">Etiam</Link></h3>
              <p>Feugiat amet tempus</p>
            </header>
          </article>
        </section>

        {/* Two */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <ul className="actions">
              <li><Link to="/landing" className="button next">Get Started</Link></li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;