import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';
import Carousel from "../Tools/carousel";

function App({ children }) {
  return (
    <div>
      <i className={styles.logo} />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">
            Tools
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
      </ul>
      <div className={styles.content}>
        <Carousel/>
        {children}
      </div>
      
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
