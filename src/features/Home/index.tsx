import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { textState } from "@recoil/atoms";

import styles from "./index.module.css";

const Home = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <Button type="primary">Primary Button</Button>
        <Input value={text} onChange={onChange} />
      </main>
      <nav>
        <Link className={styles.appLink} to="/">
          Back
        </Link>
      </nav>
    </>
  );
};

export { Home };
