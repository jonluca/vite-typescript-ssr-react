import ButtonPrimary from "components/Button/ButtonPrimary";
import ErrorBoundary from "components/ErrorBoundary";
import Input from "components/Input/Input";
import Logo from "components/Logo/Logo";
import MenuBar from "components/MenuBar/MenuBar";
import Navigation from "components/Navigation/Navigation";
import DarkModeContainer from "containers/DarkModeContainer/DarkModeContainer";
import { NAVIGATION_SHORT_DEMO } from "data/navigation";
import React, { FC } from "react";
import AvatarDropdown from "./AvatarDropdown";
import NotifyDropdown from "./NotifyDropdown";
import { useNavigate } from "react-router-dom";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {

  const navigate = useNavigate();

  const navigatePost = (e:any) => {
    e.preventDefault();
    navigate("/dashboard/submit-post");
  }

  return (
    <div className={`nc-MainNav nc-MainNav2 relative z-10`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo />
          <div className="hidden sm:block flex-grow max-w-xs">
            <form action="" method="POST" className="relative">
              <Input
                type="search"
                placeholder="Search items"
                className="pr-10 w-full"
                sizeClass="h-[42px] pl-4 py-3"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500 dark:text-neutral-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input type="submit" hidden value="" />
            </form>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <Navigation navigations={NAVIGATION_SHORT_DEMO} />
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <div className="flex">
              <DarkModeContainer />
              <NotifyDropdown />
            </div>
            <div></div>
            <ButtonPrimary onClick={(e:any) => navigatePost(e)} href={"##"} sizeClass="px-4 py-2 sm:px-5">
              Create
            </ButtonPrimary>
            <div></div>
            <AvatarDropdown />
          </div>
          <div className="flex items-center space-x-3 xl:hidden">
            <NotifyDropdown />
            <AvatarDropdown />
            <ErrorBoundary>
              <MenuBar />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
