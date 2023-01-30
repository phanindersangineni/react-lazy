import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h1>{t("header.title")}</h1>
      <TodoTextInput
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder={t("header.placeholder")}
      />
    </header>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
