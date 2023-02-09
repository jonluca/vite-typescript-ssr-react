import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { FC, Fragment, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NcImage from "components/NcImage/NcImage";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const location = useLocation();
  // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
  useEffect(() => {
    setMenuCurrentHovers([]);
  }, [location]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    const isFull = menu.megaMenu && menu.megaMenu?.length > 3;
    const classPopover = isFull
      ? "menu-megamenu--large"
      : "menu-megamenu--small relative";
    const classPanel = isFull ? "left-0" : "-translate-x-1/2 left-1/2";

    return (
      <Popover
        as="li"
        className={`menu-item menu-megamenu ${classPopover}`}
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menu)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className={`sub-menu absolute transform z-10 w-screen max-w-sm px-4 pt-3 sm:px-0 lg:max-w-max ${classPanel}`}
              >
                <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-sm">
                  <div
                    className={`relative bg-white dark:bg-neutral-800 px-3 py-6 grid gap-1 grid-cols-${menu.megaMenu?.length}`}
                  >
                    {menu.megaMenu?.map((item) => (
                      <div key={item.id}>
                        <div className="px-2">
                          <NcImage
                            containerClassName="w-36 h-24 rounded-xl overflow-hidden relative flex"
                            src={item.image}
                          />
                        </div>
                        <p className="font-medium text-neutral-900 dark:text-neutral-200 py-1 px-2 my-2">
                          {item.title}
                        </p>
                        <ul className="grid space-y-1">
                          {item.items.map(renderMegaMenuNavlink)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id}>
        {item.targetBlank ? (
          <a
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-1 px-2 rounded hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            href={item.href}
          >
            {item.name}
          </a>
        ) : (
          <NavLink
            exact
            strict
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-1 px-2 rounded hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            to={{
              pathname: item.href || undefined,
            }}
            activeClassName="font-semibold text-neutral-900 dark:!text-neutral-200"
          >
            {item.name}
          </NavLink>
        )}
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute transform z-10 min-w-[240px] pt-3 left-0"
              >
                <ul className="rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-sm relative bg-white dark:bg-neutral-800 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-sm relative bg-white dark:bg-neutral-800 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    return item.targetBlank ? (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        href={item.href}
      >
        <span className="flex-shrink-0">{item.name}</span>
        {item.type && (
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
        )}
        {item.isNew && (
          <span className="bg-red-500 text-white text-[10px] px-1.5 py-1 leading-none rounded-md ml-2">
            New!
          </span>
        )}
      </a>
    ) : (
      <NavLink
        exact
        strict
        rel="noopener noreferrer"
        className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        to={{
          pathname: item.href || undefined,
        }}
        activeClassName="font-semibold text-neutral-700 dark:!text-neutral-200"
      >
        <span className="flex-shrink-0">{item.name}</span>
        {item.type && (
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
        )}
        {item.isNew && (
          <span className="bg-red-500 text-white text-[10px] px-1.5 py-1 leading-none rounded-md ml-2">
            New!
          </span>
        )}
      </NavLink>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return item.targetBlank ? (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        href={item.href}
      >
        {item.name}
        {item.type && (
          <ChevronDownIcon
            className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
            aria-hidden="true"
          />
        )}
      </a>
    ) : (
      <NavLink
        exact
        strict
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        to={{
          pathname: item.href || undefined,
        }}
        activeClassName="!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
      >
        {item.name}
        {item.type && (
          <ChevronDownIcon
            className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
            aria-hidden="true"
          />
        )}
      </NavLink>
    );
  };

  switch (menuItem.type) {
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "dropdown":
      return renderDropdownMenu(menuItem);
    default:
      return <li className="menu-item">{renderMainItem(menuItem)}</li>;
  }
};
// Your component own properties

export default NavigationItem;
