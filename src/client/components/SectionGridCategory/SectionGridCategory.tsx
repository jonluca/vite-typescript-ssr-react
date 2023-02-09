import CardCategory1 from "components/CardCategory1/CardCategory1";
import Heading from "components/Heading/Heading";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { TaxonomyType } from "data/types";
import React from "react";

export interface SectionGridCategoryProps {
  categories?: TaxonomyType[];
}

const DATA = DEMO_CATEGORIES.filter((_, i) => i < 8);

const SectionGridCategory: React.FC<SectionGridCategoryProps> = ({
  categories = DATA,
}) => {
  return (
    <div className="nc-SectionGridCategory">
      <Heading>📚 Categories</Heading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
        {categories.map((item) => (
          <CardCategory1 key={item.id} taxonomy={item} size="large" />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategory;
