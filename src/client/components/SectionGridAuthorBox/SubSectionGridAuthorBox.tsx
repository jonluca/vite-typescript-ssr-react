import SubCardAuthorBox from "components/CardAuthorBox/SubCardAuthorBox";
import Heading from "components/Heading/Heading";
import { PostAuthorType } from "data/types";
import React, { FC } from "react";

export interface SectionGridAuthorBoxProps {
  className?: string;
  authors: any;
}

const SubSectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authors,
}) => {
  return (
    <div
      className={`relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc="Say hello to the creator of the Blog" isCenter>
        Author
      </Heading>
      <div className="nc-CardAuthorBox flex justify-center text-center">
        {authors.map((author:any) => (
          <SubCardAuthorBox className="" key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default SubSectionGridAuthorBox;
