import React from "react";

import ViewIcon from "../../icons/ViewIcon";
import CreateIcon from "../../icons/CreateIcon";
import DrowIcon from "../../icons/DrowIcon";
import FilesIcon from "../../icons/FilesIcon";
import UserIcon from "../../icons/UsersIcon";
import SubIcon from "../../icons/SubIcon";
import ArchiveIcon from "../../icons/ArchiveIcon";
import ThemeIcon from "../../icons/ThemeIcon";
import PluginIcon from "../../icons/PluginIcon";
import UpgradeIcon from "../../icons/UpgradeIcon";

const menuContent = [
  {
    id: 1,
    title: "View site",
    type: "manage",
    link: "home",
    img: <ViewIcon />,
  },
  {
    id: 2,
    title: "Create page",
    type: "manage",
    link: "createView",
    img: <CreateIcon />,
  },
  {
    id: 3,
    title: "Blog articles",
    type: "manage",
    link: "",
    img: (
      <DrowIcon
        color={"#2C5282"}
        width={"2.4rem"}
        height={"2.4rem"}
        strokeWidth={"1.5"}
      />
    ),
  },
  {
    id: 4,
    title: "Files",
    type: "manage",
    link: "files",
    img: <FilesIcon />,
  },
  {
    id: 5,
    title: "Users",
    type: "manage",
    link: "users",
    img: <UserIcon />,
  },
  {
    id: 6,
    title: "Subscription",
    type: "manage",
    link: "subscription",
    img: <SubIcon />,
  },
  {
    id: 7,
    title: "Archive pages",
    type: "manage",
    link: "archive",
    img: <ArchiveIcon />,
  },
  {
    id: 8,
    title: "Themes",
    type: "features",
    link: "themes",
    img: <ThemeIcon />,
  },
  {
    id: 9,
    title: "Plugin",
    type: "features",
    link: "plugin",
    img: <PluginIcon />,
  },
  {
    id: 10,
    title: "Upgrade plans",
    type: "features",
    link: "upgrade",
    img: <UpgradeIcon />,
  },
];

export default menuContent;
