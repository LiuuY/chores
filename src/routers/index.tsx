import React from "react";

import { pagePaths } from "@constants/paths";

import { Home } from "@features/Home";
import { Internationalization } from "@features/Internationalization";
import { Recoil } from "@features/Recoil";

export interface RouterConfig {
  path: string;
  label: string;
  component: React.ReactNode;
}

export const routers: RouterConfig[] = [
  {
    path: pagePaths.default,
    label: "Home",
    component: <Home />,
  },
  {
    path: pagePaths.i18n,
    label: "i18next",
    component: <Internationalization />,
  },
  {
    path: pagePaths.state,
    label: "Recoil",
    component: <Recoil />,
  },
];
