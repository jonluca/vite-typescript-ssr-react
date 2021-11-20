import React from "react";
import { Footer } from "../components/Footer";
import { useAppContext } from "../Context";

const Main = () => {
  const { name, setName } = useAppContext();
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <div className="flex items-center flex-col pt-10">
        <h1 className="font-bold text-gray-900 text-5xl lg:text-7xl text-center ">Hi{name ? `, ${name}!` : ""}</h1>
        <h2 className={"w-2/5 p-5 items-center flex align-middle text-center min-w-[320px]"} style={{ color: "green" }}>
          This is a Vite React SSR Tailwind boilerplate!
        </h2>
        <input
          placeholder={"Enter your name"}
          onChange={e => setName(e.currentTarget.value)}
          style={{ background: "#8080802e" }}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
