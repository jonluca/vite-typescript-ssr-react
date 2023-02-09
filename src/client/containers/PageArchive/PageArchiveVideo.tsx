import React, { FC } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import { DEMO_POSTS_VIDEO } from "data/posts";
import { PostDataType, TaxonomyType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import Card10V2 from "components/Card10/Card10V2";

export interface PageArchiveVideoProps {
  className?: string;
}

// Tag and category have same data type - we will use one demo data
const posts: PostDataType[] = DEMO_POSTS_VIDEO.filter((_, i) => i < 12);

const PageArchiveVideo: FC<PageArchiveVideoProps> = ({ className = "" }) => {
  const PAGE_DATA: TaxonomyType = DEMO_CATEGORIES[2];

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  return (
    <div
      className={`nc-PageArchiveVideo overflow-hidden ${className}`}
      data-nc-id="PageArchiveVideo"
    >
      <Helmet>
        <title>Archive || Blog Magazine React Template</title>
      </Helmet>

      <div className="dark bg-neutral-900 dark:bg-transparent text-white">
        <div className="container py-16 lg:py-28 ">
          {/* HEADER */}
          <h2 className="inline-block align-middle text-5xl font-semibold md:text-6xl ">
            {PAGE_DATA.name}
          </h2>
          <span className="block mt-4 text-neutral-300">
            {PAGE_DATA.count} Videos
          </span>
          {/* ====================== END HEADER ====================== */}
          <div className="mt-16 flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card10V2 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          uniqueSliderClass="PageArchiveVideo"
        />

        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div>

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchiveVideo;
