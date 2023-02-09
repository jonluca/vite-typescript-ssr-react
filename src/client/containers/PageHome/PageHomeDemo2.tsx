import React, { useEffect } from "react";
import SectionVideos from "./SectionVideos";
import SectionSliderPosts from "./SectionSliderPosts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "data/posts";
import { Helmet } from "react-helmet";
import SectionAds from "./SectionAds";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionHero3 from "./SectionHero3";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";
import Heading from "components/Heading/Heading";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const PageHomeDemo2: React.FC = () => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-orange-grey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div className="nc-PageHomeDemo2 overflow-hidden relative">
      <Helmet>
        <title>Home || InkFlow</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        {/* <SectionHero3 className="pb-16 lg:pb-28" posts={MAGAZINE1_POSTS} /> */}

        {/* === SECTION 1 === */}
        {/* <SectionSliderNewCategories
          className="pb-16 lg:pb-28"
          heading="Top trending topics"
          categoryCardType="card5"
          itemPerRow={4}
          subHeading="Discover over 112 topics"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 1)}
          uniqueSliderClass="PageHomeDemo2"
        /> */}

        {/* === SECTION 1 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card7"
            sliderStype="style2"
            heading="Sea travel enthusiast"
            subHeading="Over 218 articles about sea travel"
            posts={POSTS.filter((_, i) => i < 5)}
            uniqueSliderClass="PageHomeDemo2_section1"
          />
        </div>

        {/* === SECTION 13 === */}
        <div className="py-16 lg:py-28">
          <Heading>Latest audio articles</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card16Podcast post={DEMO_POSTS_AUDIO[1]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[2]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[3]} />
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {DEMO_POSTS_AUDIO.filter((_, i) => i < 9).map((p) => (
                  <Card15Podcast key={p.id} post={p} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 1 === */}
        <SectionAds className="pb-16 lg:pb-28" />

        {/* === SECTION 7 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Top authors of month"
            subHeading="Say hello to future creator potentials"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
            uniqueSliderClass="PageHomeDemo2"
          />
        </div>

        {/* === SECTION 1 === */}
        <SectionSubscribe2 className="py-16 lg:py-28" />

        {/* === SECTION 8 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card7"
            heading="Sea travel enthusiast"
            subHeading="Over 218 articles about sea travel"
            posts={POSTS.filter((_, i) => i < 4)}
            uniqueSliderClass="PageHomeDemo2_section2"
          />
        </div>

        {/* === SECTION 1 === */}
        <SectionVideos className="py-16 lg:py-28" />

        {/* === SECTION 8 === */}
        <SectionLatestPosts
          className="pb-16 lg:pb-28"
          posts={DEMO_POSTS.filter((_, i) => i > 7 && i < 18)}
          widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
          categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
          tags={DEMO_CATEGORIES}
          postCardName="card14"
          gridClass="sm:grid-cols-2"
        />
      </div>
    </div>
  );
};

export default PageHomeDemo2;
