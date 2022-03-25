import { Input } from "antd";
import { useRecoilState } from "recoil";

import { Count } from "@features/Recoil/Count";

import { textState } from "@recoil/atoms";

const Recoil = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>State management using Recoil</h2>
      <Input
        size="large"
        value={text}
        onChange={onChange}
        style={{ width: 200 }}
      />
      <Count />
    </div>
  );
};

export { Recoil };
