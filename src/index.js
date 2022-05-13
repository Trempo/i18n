import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const getLocale = () => {
  return navigator.language || navigator.userLanguage;
};

ReactDOM.render(
  <IntlProvider
    locale={getLocale()}
    messages={getLocale() === "es" ? localeEsMessages : localeEnMessages}>
    <JobsList theme={getLocale() === "es" ? "light" : "dark"} />
  </IntlProvider>,
  document.getElementById("root")
);
