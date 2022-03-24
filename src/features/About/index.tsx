import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { charCountState } from "@recoil/selectors";

import styles from "./index.module.css";

const About = () => {
  const count = useRecoilValue(charCountState);

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        <>Character Count: {count}</>;
      </main>
      <nav>
        <Link className={styles.appLink} to="/">
          Back
        </Link>
      </nav>
    </>
  );
};

export { About };
