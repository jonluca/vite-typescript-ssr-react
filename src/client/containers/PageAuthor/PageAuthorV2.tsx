import React, { FC, useState } from "react";
import { DEMO_POSTS } from "data/posts";
import { PostAuthorType, PostDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { DEMO_AUTHORS } from "data/authors";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import Avatar from "components/Avatar/Avatar";
import SocialsList from "components/SocialsList/SocialsList";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import HeadBackgroundCommon from "components/HeadBackgroundCommon/HeadBackgroundCommon";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "components/Card11/Card11";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { DEMO_CATEGORIES } from "data/taxonomies";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";

export interface PageAuthorV2Props {
  className?: string;
}
const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12);
const AUTHOR: PostAuthorType = DEMO_AUTHORS[0];
const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];
const TABS = ["Articles", "Favorites", "Saved"];

const PageAuthorV2: FC<PageAuthorV2Props> = ({ className = "" }) => {
  const [tabActive, setTabActive] = useState<string>(TABS[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-PageAuthorV2  ${className}`} data-nc-id="PageAuthorV2">
      <Helmet>
        <title>Author || Blog Magazine React Template</title>
      </Helmet>
      <HeadBackgroundCommon className="h-24 2xl:h-28" />
      <div className="container">
        <header className="max-w-xl mx-auto -mt-10 flex flex-col items-center justify-center text-center lg:-mt-14">
          <Avatar
            containerClassName="ring-4 ring-white dark:ring-0 shadow-2xl"
            imgUrl={AUTHOR.avatar}
            sizeClass="w-20 h-20 text-lg lg:w-28 lg:h-28 lg:text-xl"
            radius="rounded-3xl"
          />
          <h2 className="block align-middle mt-4 font-semibold text-2xl text-neutral-900 lg:text-3xl dark:text-neutral-100">
            {AUTHOR.displayName}
          </h2>
          <span className="mt-2 block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base">
            {AUTHOR.desc}
          </span>
          <SocialsList className="mt-3" />
        </header>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav className="sm:space-x-2">
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </main>

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
          uniqueSliderClass="PageAuthorV2"
        />

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAuthorV2;
