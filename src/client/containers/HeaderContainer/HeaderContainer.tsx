import Header from "components/Header/Header";
import React, { FC, Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PathName } from "routers/types";
import { Popover, Transition } from "@headlessui/react";
import { CogIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import supabaseClient from "utils/supabaseClient";
import { useGlobalContext } from 'utils/context'

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

interface HomePageItem {
  name: string;
  slug: PathName;
}

let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;

export interface HeaderContainerProps {
  className?: string;
}

const HeaderContainer: FC<HeaderContainerProps> = ({ className = "" }) => {
  //const { user, event } = useGlobalContext();

  const anchorRef = React.useRef<HTMLDivElement>(null);

  let [headers] = React.useState<SiteHeaders[]>([
    "Header 1",
    "Header 2",
    "Header 3",
  ]);

  let [homePages] = React.useState<HomePageItem[]>([
    {
      name: "Home Main",
      slug: "/",
    },
    {
      name: "Home 2",
      slug: "/home-demo-2",
    },
    {
      name: "Home 3",
      slug: "/home-demo-3",
    },
    {
      name: "Home 4",
      slug: "/home-demo-4",
    },
    {
      name: "Home 5",
      slug: "/home-demo-6",
    },
  ]);
  const [headerSelected, setHeaderSelected] =
    React.useState<SiteHeaders>();

  const [isTopOfPage, setIsTopOfPage] = React.useState(typeof window !== "undefined" && window.pageYOffset < 5);
  const location = useLocation();
  const user = supabaseClient.auth.user();
  const session = supabaseClient.auth.session();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, []);

  useEffect(() => {
    if (location.pathname.includes("home-header-style1")) {
      setHeaderSelected("Header 1");
    }
    if (location.pathname.includes("home-header-style2")) {
      setHeaderSelected("Header 2");
    }
    if (location.pathname.includes("home-header-style2-logedin")) {
      setHeaderSelected("Header 3");
    }
  }, [location]);

  // useEffect(() => {
  //   if (event == "SIGNED_IN" || event == "USER_UPDATED" || event == "PASSWORD_RECOVERY") {
  //     setHeaderSelected("Header 3");
  //     console.log("Event changed");
  //   }else {
  //     setHeaderSelected("Header 2");
  //     console.log("Event not changed");
  //   }
  // }, [user]);

  
  useEffect(() => {
    if (user) {
      setHeaderSelected("Header 3");
      console.log("User exists");
      console.log(session);
      console.log(user);
    }else {
      setHeaderSelected("Header 1");
      console.log("User doesnot exists");
      console.log(session);
    }
  }, [user]);

  const renderRadioHeaders = () => {
    return (
      <div className="mt-4">
        <span className="text-sm font-medium">Header Styles</span>
        <div className="mt-1.5 flex items-center space-x-2">
          {headers.map((header) => {
            return (
              <div
                key={header}
                className={`py-1.5 px-3.5 flex items-center rounded-full font-medium text-xs cursor-pointer select-none ${
                  headerSelected === header
                    ? "bg-black text-white shadow-black/10 shadow-lg"
                    : "border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
                }`}
                onClick={() => setHeaderSelected(header)}
              >
                {header}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderRadioHomePages = () => {
    return (
      <div className="mt-4">
        <span className="text-sm font-medium">Home Demos</span>
        <div className="mt-1.5 flex flex-wrap items-center">
          {homePages.map((home) => {
            return (
              <Link
                key={home.slug}
                to={home.slug}
                className={`mr-2 my-1 py-1.5 px-3.5 flex items-center  rounded-full font-medium text-xs cursor-pointer select-none ${
                  location.pathname === home.slug
                    ? "bg-black text-white shadow-black/10 shadow-lg"
                    : "border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
                }`}
              >
                {home.name}
              </Link>
            );
          })}
          <a
            key={"home-rtl"}
            href={"https://chisnghiax.com/ncmaz-rtl/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={`mr-2 my-1 py-1.5 px-3.5 flex items-center  rounded-full font-medium text-xs cursor-pointer select-none border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500`}
          >
            Home RTL
          </a>
        </div>
      </div>
    );
  };

  const renderControlSelections = () => {
    return (
      <div className="relative z-40 hidden lg:block">
        <div className="fixed right-3 top-1/4 z-40 flex items-center">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`p-3 bg-white hover:bg-neutral-100 dark:bg-primary-6000 dark:hover:bg-primary-700 rounded-xl [ nc-custom-shadow-1 ] border border-neutral-200 dark:border-primary-6000 z-10 focus:outline-none ${
                    open ? " focus:ring-2 ring-primary-500" : ""
                  }`}
                >
                  <CogIcon className="w-7 h-7" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm">
                    <div className="rounded-2xl bg-white dark:bg-neutral-800 overflow-hidden nc-custom-shadow-1">
                      <div className="relative p-6">
                        <span className="text-xl font-semibold">Customize</span>
                        <div className="w-full border-b border-neutral-200 dark:border-neutral-700 mt-4"></div>
                        {renderRadioHeaders()}
                        {renderRadioHomePages()}
                      </div>
                      <div className="bg-gray-50 dark:bg-white/5 p-5">
                        <a
                          className="flex items-center justify-center w-full bg-primary-6000 hover:bg-primary-700 text-neutral-50 px-4 py-2 !rounded-xl text-sm font-medium"
                          href={
                            "https://themeforest.net/item/ncmaz-blog-magazine-react-template/33283311"
                          }
                          target={"_blank"}
                          rel={"noopener noreferrer"}
                        >
                          <ShoppingCartIcon className="w-4 h-4" />
                          <span className="ml-2">Buy this template</span>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    switch (headerSelected) {
      case "Header 1":
        return <Header isTopOfPage={isTopOfPage} mainNavStyle={"style1"} />;
      case "Header 2":
        return <Header isTopOfPage={isTopOfPage} mainNavStyle={"style2"} />;
      case "Header 3":
        return (
          <Header isTopOfPage={isTopOfPage} mainNavStyle={"style2Logedin"} />
        );
    }
  };

  return (
    <>
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
      {renderHeader()}
      {renderControlSelections()}
    </>
  );
};

export default HeaderContainer;
