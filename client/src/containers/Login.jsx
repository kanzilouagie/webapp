import React from "react";
import PageHeader from "../components/PageHeader";
import stylesLayout from "../styles/layout.module.css";
import stylesTypo from "../styles/typo.module.css";
import LoginForm from "../components/auth/LoginForm";
import styles from "../styles/layout.module.css";

const Login = () => {
  return (
    <div className={`${stylesLayout.login_form}`}>
      <PageHeader title={`Login`} stijling={styles.pageHeader} />
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
