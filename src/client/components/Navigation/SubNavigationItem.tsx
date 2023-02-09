import React, { FC, Fragment, useEffect, useState } from "react";

export interface NavigationItemProps {
  menuItem: any;
}

const SubNavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
  
  const renderMainItem = (item: any) => {
    console.log(item.link);
    return (
      <a
        target="_blank"
        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        href={item.link}
      >
        {item.name}
      </a>
    )
  };

  return <li className="menu-item">{renderMainItem(menuItem)}</li>;
};
// Your component own properties

export default SubNavigationItem;
