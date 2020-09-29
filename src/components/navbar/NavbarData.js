import React from 'react';

import ViewIcon from '../../icons/ViewIcon';
import CreateIcon from '../../icons/CreateIcon';
import DrowIcon from '../../icons/DrowIcon';
import FilesIcon from '../../icons/FilesIcon';
import UserIcon from '../../icons/UserIcon';
import SubIcon from '../../icons/SubIcon';
import ArchiveIcon from '../../icons/ArchiveIcon';
import ThemeIcon from '../../icons/ThemeIcon';
import PluginIcon from '../../icons/PluginIcon';
import UpgradeIcon from '../../icons/UpgradeIcon';


const menuContent = [
  {
    id: 1, title: 'View site', type: 'manage', img: <ViewIcon />
  },
  {
    id: 2, title: 'Create page', type: 'manage', img: <CreateIcon />
  },
  {
    id: 3, title: 'Blog articles', type: 'manage', img: <DrowIcon color={'#2C5282'} width={'2.4rem'} height={'2.4rem'} strokeWidth={'1.5'}/>
  },
  {
    id: 4, title: 'Files', type: 'manage', img: <FilesIcon />
  },
  {
    id: 5, title: 'Users', type: 'manage', img: <UserIcon />
  },
  {
    id: 6, title: 'Subscription', type: 'manage', img: <SubIcon />
  },
  {
    id: 7, title: 'Archive pages', type: 'manage', img: <ArchiveIcon />
  },
  {
    id: 8, title: 'Themes', type: 'features', img: <ThemeIcon />
  },
  {
    id: 9, title: 'Plugin', type: 'features', img: <PluginIcon />
  },
  {
    id: 10, title: 'Upgrade plans', type: 'features', img: <UpgradeIcon />
  }
];


export default menuContent;
