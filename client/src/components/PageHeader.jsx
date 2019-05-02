import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/layout.module.css";

const PageHeader = ({ title, stijling }) => {
  return (
    <div className={stijling}>
      <Link to="/" className={styles.home}></Link>

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

PageHeader.defaultProps = {
  title: `Any titel`
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
