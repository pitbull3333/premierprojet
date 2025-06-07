import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common from "./translations/fr/common.json";

const resources = {
  fr: {
    common,
  },
};

void i18n.use(initReactI18next).init({
  fallbackLng: "fr",
  debug:false,
  resources,
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});

export { default } from "i18next";