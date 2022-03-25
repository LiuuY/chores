import { useRecoilValue } from "recoil";

import { charCountState } from "@recoil/selectors";

const Count = () => {
  const count = useRecoilValue(charCountState);

  return <div>Character Count: {count}</div>;
};

export { Count };
