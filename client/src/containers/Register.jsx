import React from "react";

import PageHeader from "../components/PageHeader";
import stylesLayout from "../styles/layout.module.css";
import stylesTypo from "../styles/typo.module.css";
import styles from "../styles/layout.module.css";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className={`${stylesLayout.register_form}`}>
      <PageHeader title={`Register`} stijling={styles.pageHeader} />
      <section>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
