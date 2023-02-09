import { ReactNode } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/:authorslug"?: {};
  "/archive/:slug"?: {};
  "/archive-video/:slug"?: {};
  "/archive-audio/:slug"?: {};
  //
  "/home-header-style1"?: {};
  "/home-header-style2"?: {};
  "/home-header-style2-logedin"?: {};
  //
  "/author/:slug"?: {};
  "/author-v2/:slug"?: {};
  //
  "/single/:slug"?: {};
  "/single-template-2/:slug"?: {};
  "/single-template-3/:slug"?: {};
  "/single-sidebar/:slug"?: {};
  "/single-2-sidebar/:slug"?: {};
  "/single-3-sidebar/:slug"?: {};
  "/single-4-sidebar/:slug"?: {};
  "/posts/:postslug"?: {};
  "/category/:categoryslug"?: {};
  "/:authorslug/posts/:postslug"?: {};
  "/:authorslug/category/:categoryslug"?: {};
  "/single-gallery/:slug"?: {};
  "/single-audio/:slug"?: {};
  "/single-video/:slug"?: {};
  //
  "/search"?: {};
  "/search-v2"?: {};
  "/about"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/dashboard"?: {};
  "/subscription"?: {};
  //
  "/theme-cyan-blueGrey"?: {};
  "/theme-blue-blueGrey"?: {};
  "/theme-purple-blueGrey"?: {};
  "/theme-teal-blueGrey"?: {};
  "/theme-blueGrey-blueGrey"?: {};
  "/theme-red-warmGrey"?: {};
  "/theme-cyan-warmGrey"?: {};
  "/theme-blue-coolGrey"?: {};
  "/theme-lightBlue-coolGrey"?: {};
  "/theme-pink-coolGrey"?: {};
  "/theme-green-grey"?: {};
  "/theme-yellow-grey"?: {};
  "/theme-orange-grey"?: {};
  "/theme-fuchsia-blueGrey"?: {};
  //
  "/home-demo-1"?: {};
  "/home-demo-2"?: {};
  "/home-demo-3"?: {};
  "/home-demo-4"?: {};
  "/home-demo-5"?: {};
  "/home-demo-6"?: {};
  "/home-demo-7"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ReactNode;
}
