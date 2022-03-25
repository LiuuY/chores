import { Button } from "antd";
import React, { Suspense } from "react";
import { Trans, useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();
  return <h2>{t("title")}</h2>;
}

function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

const Loader = () => <div>loading...</div>;

function Internationalization() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <div className="App-header">
          <Welcome />
          <Button type="primary" onClick={() => changeLanguage("zh")}>
            de
          </Button>
          <Button type="primary" onClick={() => changeLanguage("en")}>
            en
          </Button>
        </div>
        <div className="App-intro">
          <MyComponent />
        </div>
        <div>{t("description.part2")}</div>
      </div>
    </Suspense>
  );
}

export { Internationalization };
