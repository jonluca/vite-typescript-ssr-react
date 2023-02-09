import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.png";
import logoLightImg from "images/logo-light.png";
import LogoSvg from "./LogoSvg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const SubLogo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
}) => {
  return (
    <Link to="/" className="ttnc-logo inline-block text-primary-6000">
      {/* THIS USE FOR MY MULTI DEMO */}
      {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
      
      <img className="mx-auto h-14 sm:h-12 md:h-12 text-neutral-400" alt="svgImg" src={img}/>
    </Link>
  );
};

export default SubLogo;
