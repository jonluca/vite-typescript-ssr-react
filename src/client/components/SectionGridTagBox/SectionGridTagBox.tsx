import CardTagBox from "components/CardTagBox/CardTagBox";
import Heading from "components/Heading/Heading";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { TaxonomyType } from "data/types";
import React from "react";

export interface SectionGridTagBoxProps {
  tags?: TaxonomyType[];
}

const DATA = DEMO_CATEGORIES.filter((_, i) => i < 10);

const SectionGridTagBox: React.FC<SectionGridTagBoxProps> = ({
  tags = DATA,
}) => {
  return (
    <div className="nc-SectionGridTagBox relative">
      <Heading desc="Discover over 1130 tags" isCenter>
        Explore trending tags
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-7">
        {tags.map((item) => (
          <CardTagBox key={item.id} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridTagBox;
