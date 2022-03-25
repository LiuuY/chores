import { DemoReq } from "@typed/requests/demo";
import { DemoRes } from "@typed/responses/demo";

import { httpInstance } from "../http";
import { ApiUrl } from "./apiUrl";

export const getDemo = () => {
  return httpInstance.get<DemoReq[], DemoRes[]>(ApiUrl.demo);
};
