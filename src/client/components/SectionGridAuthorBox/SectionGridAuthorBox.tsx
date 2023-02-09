import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import Heading from "components/Heading/Heading";
import { PostAuthorType } from "data/types";
import React, { FC } from "react";

export interface SectionGridAuthorBoxProps {
  className?: string;
  authors: PostAuthorType[];
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authors,
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc="Rating based on customer reviews" isCenter>
        Top 10 author of the month
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 md:gap-8 ">
        {authors.map((author) => (
          <CardAuthorBox key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
