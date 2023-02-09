
import SubLogo from "components/Logo/SubLogo";
import { Link } from "react-router-dom";
import SubSocialList from "components/SocialsList/SubSocialList";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Getting started",
    menus: [
      { href: "#", label: "Installation" },
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Editor Support" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "#", label: "Design features" },
      { href: "#", label: "Prototyping" },
      { href: "#", label: "Design systems" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Customers" },
    ],
  },
  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "#", label: "Best practices" },
      { href: "#", label: "Support" },
      { href: "#", label: "Developers" },
      { href: "#", label: "Learn design" },
      { href: "#", label: "What's new" },
    ],
  },
  {
    id: "4",
    title: "Community",
    menus: [
      { href: "#", label: "Discussion Forums" },
      { href: "#", label: "Code of Conduct" },
      { href: "#", label: "Community Resources" },
      { href: "#", label: "Contributing" },
      { href: "#", label: "Concurrent Mode" },
    ],
  },
];



export interface SubFooterProps {
    logo: any,
    username: string,
    menus: any
}

const SubFooter: React.FC<SubFooterProps> = ({ logo, username, menus }) => {

    const socials = menus[0]['social_icons'];
  
    const navmenus = menus?.filter(function(obj:any) {
       return obj.type == "Navigation Menu";
    }); 

    console.log(socials)

  const renderWidgetMenuItem = (menu: any, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Navigation Menu
        </h2>
        <ul className="mt-5 space-y-4">
            <li>
                <a
                target="_blank"
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={menu.link}
                >
                {menu.name}
                </a>
            </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-8 lg:py-8 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col items-center text-center justify-center md:flex-row md:justify-between">
          <div className="flex md:ml-5">
            {
              logo == null ? 
              
              <Link to="/" className="ttnc-logo mt-5 inline-block">
                <h2 className={`text-2xl md:text-2xl font-semibold`}>{username.toUpperCase()}</h2>
              </Link>
              :
              <SubLogo img={logo} />
            }
          </div>
          <p className="mt-5 text-sm px-5 md:mr-5 md:px-0">Copyright&nbsp;<span className="font-semibold">© 2022, {username.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}. All rights reserved</span></p>
          {
            socials.length > 0 && 
            <div className="flex mt-5 mr-0 md:mr-10">
              <SubSocialList socials={socials} itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-200 text-xl dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200" />
            </div>
          }
        </div>
    </div>
  );
};

export default SubFooter;
