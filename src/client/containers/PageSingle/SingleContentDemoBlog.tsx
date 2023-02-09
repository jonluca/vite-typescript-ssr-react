import React, { FC } from "react";
import parse from 'html-react-parser';

export interface SingleContenDemotProps {
  data: string;
}

const SingleContentDemoBlog: FC<SingleContenDemotProps> = ({ data }) => {
  return (
    <>
      {/* THIS IS THE DEMP CONTENT */}
      {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
      {parse(data)}
    </>
  );
};

export default SingleContentDemoBlog;
