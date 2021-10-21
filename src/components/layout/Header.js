import { Fragment } from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>TODO</h1>
      </header>
    </Fragment>
  );
};

export default Header;
