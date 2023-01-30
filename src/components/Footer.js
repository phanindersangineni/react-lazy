import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import FilterLink from "../containers/FilterLink";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "all",
  [SHOW_ACTIVE]: "active",
  [SHOW_COMPLETED]: "completed"
};

const Footer = props => {
  const { t } = useTranslation(["footer", "translation"]);

  const { activeCount, completedCount, onClearCompleted } = props;
  const itemWord = activeCount === 1 ? t("footer:item") : t("footer:items");

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || t("no")}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter => (
          <li key={filter}>
            <FilterLink filter={filter}>{t(FILTER_TITLES[filter])}</FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          {t("clearCompleted")}
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
