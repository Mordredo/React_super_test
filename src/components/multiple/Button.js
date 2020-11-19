import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonConstruct = (settings) => {
  const icon = settings.icon === undefined ? "" : settings.icon;
  const newVariant =
    settings.variant === undefined ? "contained" : settings.variant;
  const typeBtn = settings.type === undefined ? "button" : settings.type;

  if (settings.link !== undefined) {
    return (
      <Button
        type={typeBtn}
        color="primary"
        variant={newVariant}
        className={settings.styles}
        startIcon={icon}
        component={Link}
        to={settings.link}
      >
        {settings.text}
      </Button>
    );
  }
  return (
    <Button
      type={typeBtn}
      color="primary"
      variant={newVariant}
      className={settings.styles}
      startIcon={icon}
    >
      {settings.text}
    </Button>
  );
};

export default ButtonConstruct;
