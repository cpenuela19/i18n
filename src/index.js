import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


const browserLocale = navigator.language;

const messages = browserLocale.startsWith('es') ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={browserLocale} messages={messages}>
    <JobsList locale={browserLocale} />
  </IntlProvider>,
  document.getElementById("root")
);
