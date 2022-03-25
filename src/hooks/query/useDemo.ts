import { useQuery } from "react-query";

import { queryKey } from "@constants/queryKey";

import { getDemo } from "@apis/demo";

import { DemoRes } from "@typed/responses/demo";

export const useDemo = () => {
  return useQuery<DemoRes[]>(queryKey.GET_DEMO, getDemo);
};
