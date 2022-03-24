import { Link } from "react-router-dom";
import { Button } from "antd";

import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <Button type="primary">Primary Button</Button>
      </main>
      <nav>
        <Link className={styles.appLink} to="/about">
          About
        </Link>
      </nav>
    </>
  );
};

export { Home };
