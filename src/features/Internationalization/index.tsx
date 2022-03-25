import { Radio, RadioChangeEvent } from "antd";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Internationalization() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: RadioChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>{t("title")}</h2>
        <Radio.Group onChange={changeLanguage} value={i18n.language}>
          <Radio.Button value="zh">中文</Radio.Button>
          <Radio.Button value="en">English</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Trans i18nKey="description.part1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

export { Internationalization };
