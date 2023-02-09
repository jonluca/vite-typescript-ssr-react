import React, { FC } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import { DEMO_POSTS_AUDIO } from "data/posts";
import { PostDataType, TaxonomyType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "components/NcImage/NcImage";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";

export interface PageArchiveAudioProps {
  className?: string;
}

// Tag and category have same data type - we will use one demo data
const posts: PostDataType[] = DEMO_POSTS_AUDIO.filter((_, i) => i < 12);

const PageArchiveAudio: FC<PageArchiveAudioProps> = ({ className = "" }) => {
  const PAGE_DATA: TaxonomyType = DEMO_CATEGORIES[1];

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  const renderSection = (sectionPosts: PostDataType[]) => {
    const loopPosts = sectionPosts.filter((_, i) => i > 2);
    return (
      <div className="mt-8 lg:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card16Podcast post={sectionPosts[0]} />
        <Card16Podcast post={sectionPosts[1]} />
        <Card16Podcast post={sectionPosts[2]} />
        <div className="md:col-span-2 lg:col-span-3">
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`}>
            {loopPosts.map((p) => (
              <Card15Podcast key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageArchiveAudio overflow-hidden ${className}`}
      data-nc-id="PageArchiveAudio"
    >
      <Helmet>
        <title>Archive || Blog Magazine React Template</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 lg:aspect-h-6 xl:aspect-h-5 2xl:aspect-h-4 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle ml-3 text-5xl font-semibold md:text-7xl ">
              {PAGE_DATA.name}
            </h2>
            <span className="block mt-4 text-neutral-300">
              {PAGE_DATA.count} Audio articles
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
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
          {renderSection(posts.filter((_, i) => i < 19))}

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>

        {/* MORE SECTIONS */}
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

        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          uniqueSliderClass="PageArchiveAudio"
        />

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchiveAudio;
