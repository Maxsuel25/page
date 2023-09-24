import { FormNewsletter } from "./FormNewsletter";

import styles from "./style.module.css"
export const FormSection = () => {
  return (
    <div className="container sm">
      <section className={styles.newsletterSection}>
        <h2 className="title2 center">INSCREVA-SE NA NEWSLETTER</h2>
        <FormNewsletter />
      </section>
    </div>
  );
};
