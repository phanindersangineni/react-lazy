import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="LanguageSelector">
      <button onClick={() => changeLanguage("de")}>de</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </section>
  );
}
