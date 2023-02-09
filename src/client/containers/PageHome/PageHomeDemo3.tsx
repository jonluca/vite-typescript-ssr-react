import React, { useEffect } from "react";
import SectionVideos from "./SectionVideos";
import SectionSliderPosts from "./SectionSliderPosts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "data/posts";
import SectionHero from "components/SectionHero/SectionHero";
import rightImg from "images/hero-right.png";
import Vector1 from "images/Vector1.png";
import BecomeAnAuthorImg from "images/BecomeAnAuthorImg.png";
import { Helmet } from "react-helmet";
import SectionAds from "./SectionAds";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import SectionMagazine5 from "./SectionMagazine5";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionMagazine8 from "./SectionMagazine8";
import SectionMagazine9 from "./SectionMagazine9";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_TABS = ["all", "Garden", "Fitness", "Design"];
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const PageHomeDemo3: React.FC = () => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-fuchsia-blueGrey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div className="nc-PageHomeDemo3 overflow-hidden relative">
      <Helmet>
        <title>Home 3 || Blog Magazine React Template</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION HERO === */}
        <SectionHero
          rightImg={rightImg}
          className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
          heading={
            <span>
              Far from face <br /> but not from {` `}
              <span className="relative pr-3">
                <img
                  className="w-full absolute top-1/2 -left-1 transform -translate-y-1/2"
                  src={Vector1}
                  alt=""
                />
                <span className="relative">heart</span>
              </span>
            </span>
          }
          btnText="Getting started"
          subHeading="Let stay at home and share with everyone the most beautiful stories in your hometown 🎈"
        />

        <SectionGridCategoryBox
          headingCenter={false}
          categoryCardType="card2"
          className="pb-16 lg:pb-28"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
        />

        {/* === SECTION 1 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine5
            heading="🧩 Editor Picks"
            posts={MAGAZINE1_POSTS}
            tabs={MAGAZINE1_TABS}
          />
        </div>

        {/* === SECTION 8 === */}
        <SectionSliderPosts
          className="py-16 lg:py-28"
          postCardName="card10"
          heading="Sea travel enthusiast"
          subHeading="Over 218 articles about sea travel"
          posts={POSTS.filter((_, i) => i < 8)}
          uniqueSliderClass="PageHomeDemo3"
        />

        {/* === SECTION 1 === */}
        <SectionAds />

        {/* === SECTION 9 === */}

        <SectionMagazine8
          className="py-16 lg:py-28"
          posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
        />

        {/* === SECTION 9 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine9
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i >= 6 && i < 16)}
          />
        </div>

        {/* === SECTION 1 === */}
        <SectionVideos className="py-16 lg:py-28" />

        {/* === SECTION 7 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Newest authors"
            subHeading="Say hello to future creator potentials"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
            uniqueSliderClass="PageHomeDemo3"
          />
        </div>

        {/* SECTION 3 */}
        <SectionBecomeAnAuthor
          className="py-16 lg:py-28"
          rightImg={BecomeAnAuthorImg}
        />

        {/* === SECTION 8 === */}
        <SectionLatestPosts
          posts={DEMO_POSTS.filter((_, i) => i > 7 && i < 18)}
          widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
          categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
          tags={DEMO_CATEGORIES}
          postCardName="card7"
          gridClass="sm:grid-cols-2"
          className="pb-16 lg:pb-28"
        />

        {/* === SECTION 1 === */}
        <SectionSubscribe2 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default PageHomeDemo3;
