import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageLayout } from "@components/PageLayout";

import { routers } from "./routers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {routers.map(({ path, component: OriginComponent }) => (
          <Route key={path} path={path} element={OriginComponent} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
