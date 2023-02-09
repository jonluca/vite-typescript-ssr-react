import React from "react";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Logo from "components/Logo/Logo";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./NavigationItem";
import DarkModeContainer from "containers/DarkModeContainer/DarkModeContainer";
import { NAVIGATION_DEMO } from "data/navigation";
import ButtonPrimary from "components/Button/ButtonPrimary";
import SocialsList from "components/SocialsList/SocialsList";
import { ChevronDownIcon } from "@heroicons/react/solid";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO,
  onClickClose,
}) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu pl-5 pb-1 text-base">
        {item.children?.map((item, index) => _renderItem(item, index, true))}
      </ul>
    );
  };

  const _renderItemHasChild = (
    item: NavItemType,
    index: number,
    isChild: boolean
  ) => {
    return (
      <Disclosure key={index}>
        <li className="text-neutral-900 dark:text-white">
          <div
            className={`flex justify-between font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${
              isChild ? "" : "uppercase tracking-wide"
            }`}
          >
            <NavLink
              exact
              strict
              className="py-2.5 px-4 select-none"
              to={{
                pathname: item.href || undefined,
              }}
              activeClassName="text-secondary"
            >
              {item.name}
            </NavLink>

            <Disclosure.Button
              as="button"
              className="py-2.5 px-4 flex flex-1 justify-end select-none focus:outline-none focus:ring-0"
            >
              <ChevronDownIcon
                className="ml-2 h-4 w-4 text-neutral-500"
                aria-hidden="true"
              />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        </li>
      </Disclosure>
    );
  };

  const _renderItemNoChild = (
    item: NavItemType,
    index: number,
    isChild: boolean
  ) => {
    return (
      <li key={index} className="text-neutral-900 dark:text-white">
        <NavLink
          exact
          strict
          className={`flex w-full items-center py-2.5 px-4 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${
            isChild ? "" : "uppercase tracking-wide"
          }`}
          to={{
            pathname: item.href || undefined,
          }}
          activeClassName="text-secondary"
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  const _renderItem = (item: NavItemType, index: number, isChild: boolean) => {
    if (item.children) {
      return _renderItemHasChild(item, index, isChild);
    }
    return _renderItemNoChild(item, index, isChild);
  };

  return (
    <div className="w-full h-full py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800 border-r border-transparent dark:border-neutral-700">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex justify-between items-center mt-4">
            <SocialsList itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300" />
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
        {data.map((item, index) => _renderItem(item, index, false))}
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-4">
        <a
          href="https://themeforest.net/item/ncmaz-blog-magazine-react-template/33283311"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonPrimary>Get Template</ButtonPrimary>
        </a>
      </div>
    </div>
  );
};

export default NavMobile;
