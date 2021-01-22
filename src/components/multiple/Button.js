import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logout from "../../func/Logout";
import detectUser from "../../enums/detectUser";
import * as constants from "../../store/storeConstants";

const ButtonConstruct = (settings) => {
  const icon = settings.icon === undefined ? "" : settings.icon;
  const newVariant =
    settings.variant === undefined ? "contained" : settings.variant;
  const typeBtn = settings.type === undefined ? "button" : settings.type;
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  return (
    <Button
      type={typeBtn}
      color="primary"
      variant={newVariant}
      className={settings.styles}
      startIcon={icon}
      component={settings.link !== undefined ? Link : "button"}
      to={settings.link !== undefined ? settings.link : undefined}
      onClick={
        settings.logout
          ? function () {
              if (Logout(userList) !== undefined) {
                const userActive = Logout(userList);
                const Id = userActive.id;
                const token = "";

                if (Object.keys(userActive).length > 0) {
                  dispatch({
                    type: constants.UPDATE_USER,
                    payload: { Id, token },
                  });
                }
              }
            }
          : function (e) {}
      }
    >
      {settings.text}
    </Button>
  );
};

export default ButtonConstruct;
