import React, { FC } from "react";

export interface NotFoundProps {
  classname?: string;
  message?: string;
}

const NotFound: FC<NotFoundProps> = ({ classname, message = "THE BLOG YOU WERE LOOKING FOR DOESN'T EXIST." }) => { 
 return (
    
    <div
        className={`nc-PageSingleTemp4Sidebar text-center pt-5 lg:pt-16`}
        data-nc-id="PageSingleTemp4Sidebar"
    >
        {/*  */}
        
        <div className="container relative py-7 lg:py-0">
            {/* HEADER */}
            <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-5xl md:text-6xl">🪔</h2>
                <h1 className={`${classname} font-semibold tracking-widest`}>
                    404
                </h1>
                <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                    {message}
                </span>
            </header>
        </div>
    </div>
 )
}

export default NotFound;