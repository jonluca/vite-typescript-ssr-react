import React, { FC } from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO } from "data/navigation";

export interface NavigationProps {
  navigations?: NavItemType[];
}

const Navigation: FC<NavigationProps> = ({ navigations = NAVIGATION_DEMO }) => {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {navigations.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};

export default Navigation;
