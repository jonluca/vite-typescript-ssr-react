import React from "react";
import { Link } from "react-router-dom";
import ButtonClose from "components/ButtonClose/ButtonClose";
import SubLogo from "components/Logo/SubLogo";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./NavigationItem";
import DarkModeContainer from "containers/DarkModeContainer/DarkModeContainer";
import { NAVIGATION_DEMO } from "data/navigation";
import ButtonPrimary from "components/Button/ButtonPrimary";
import SubSocialList from "components/SocialsList/SubSocialList";
import { ChevronDownIcon } from "@heroicons/react/solid";

export interface NavMobileProps {
  data?: any;
  username:any;
  description:any;
  logo:any;
  socials:any;
  onClickClose?: () => void;
}

const SubNavMobile: React.FC<NavMobileProps> = ({
  data,
  username,
  description,
  logo,
  socials,
  onClickClose,
}) => {

  const _renderItemNoChild = (
    item: any,
    index: any,
    isChild: boolean
  ) => {
    return (
      <li key={index} className="text-neutral-900 dark:text-white">
        <a
          target="_blank"
          className={`flex w-full items-center py-2.5 px-4 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg`}
          href={item.link}
        >
          {item.name}
        </a>
      </li>
    );
  };

  const _renderItem = (item: NavItemType, index: number, isChild: boolean) => {
    return _renderItemNoChild(item, index, isChild);
  };

  return (
    <div className="w-full h-full py-2 transition transform dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800 border-r border-transparent dark:border-neutral-700">
      <div className="py-6 px-5">
        {
          logo == null ? 
          
          <Link to="/" className="ttnc-logo mt-5 inline-block">
            <h2 className={`text-2xl md:text-2xl font-semibold`}>{username.toUpperCase()}</h2>
          </Link>
          :
          <SubLogo img={logo} />
        }
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            {description}
          </span>

          <div className="flex justify-between items-center mt-4">
            <SubSocialList socials={socials} itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300" />
            <span className="block">
              <DarkModeContainer className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map((item:any, index:any) => _renderItem(item, index, false))}
      </ul>
    </div>
  );
};

export default SubNavMobile;
