import React, { FC } from "react";
import SubNavigationItem from "./SubNavigationItem";
import { NAVIGATION_DEMO } from "data/navigation";

export interface NavigationProps {
  navigations?: any;
}

const SubNavigation: FC<NavigationProps> = ({ navigations }) => {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {navigations.map((item:any, index: any) => (
        <SubNavigationItem key={index} menuItem={item} />
      ))}
    </ul>
  );
};

export default SubNavigation;
