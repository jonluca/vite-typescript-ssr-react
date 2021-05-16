import React from "react";

export const Footer = () => {
  return (
    <footer className={"justify-center items-center"}>
      &copy; {new Date().getFullYear()} - <a href={"https://jonlu.ca"}>JonLuca DeCaro</a> -{" "}
      <a className={"p-1"} href={"https://github.com/jonluca/vite-typescript-ssr-react"}>
        Repo
      </a>
    </footer>
  );
};
