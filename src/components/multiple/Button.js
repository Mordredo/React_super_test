import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonConstruct = (settings) => {
  const icon = settings.icon === undefined ? "" : settings.icon;
  const newVariant =
    settings.variant === undefined ? "contained" : settings.variant;
  const typeBtn = settings.type === undefined ? "button" : settings.type;

  return (
    <Button
      type={typeBtn}
      color="primary"
      variant={newVariant}
      className={settings.styles}
      startIcon={icon}
      component={settings.link !== undefined ? Link : "button"}
      to={settings.link !== undefined ? settings.link : undefined}
    >
      {settings.text}
    </Button>
  );
};

export default ButtonConstruct;
