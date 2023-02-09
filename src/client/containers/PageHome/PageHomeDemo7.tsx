import React, { useEffect } from "react";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionSliderPosts from "./SectionSliderPosts";
import SectionMagazine1 from "./SectionMagazine1";
import SectionVideos from "./SectionVideos";
import SectionLargeSlider from "./SectionLargeSlider";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { PostDataType } from "data/types";
import {
  DEMO_POSTS,
  DEMO_POSTS_AUDIO,
  DEMO_POSTS_GALLERY,
  DEMO_POSTS_VIDEO,
} from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionMagazine4 from "./SectionMagazine4";
import SectionAds from "./SectionAds";
import SectionGridPosts from "./SectionGridPosts";
import SectionMagazine7 from "./SectionMagazine7";
import SectionMagazine8 from "./SectionMagazine8";
import SectionMagazine9 from "./SectionMagazine9";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

//
const POSTS: PostDataType[] = DEMO_POSTS;
//
const MAGAZINE1_TABS = ["all", "Garden", "Fitness", "Design"];
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);
//

const PageHomeDemo7: React.FC = () => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-demo-7 ";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div className="nc-PageHomeDemo7 relative">
      <Helmet>
        <title>Home || Blog Magazine React Template</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        {/* ======= START CONTAINER ============= */}
        <div className="container relative">
          {/* === SECTION  === */}
          <SectionLargeSlider
            className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-24 "
            posts={POSTS.filter((_, i) => i < 3)}
          />

          {/* === SECTION  === */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewAuthors
              heading="Newest authors"
              subHeading="Say hello to future creator potentials"
              authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
              uniqueSliderClass="PageHomeDemo7"
            />
          </div>

          {/* === SECTION 5 === */}
          <SectionSliderNewCategories
            className="py-16 lg:py-28"
            heading="Top trending topics"
            subHeading="Discover 233 topics"
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
            categoryCardType="card4"
            uniqueSliderClass="PageHomeDemo7"
          />

          {/* === SECTION 6 === */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderPosts
              postCardName="card9"
              heading="Explore latest audio articles"
              subHeading="Click on the icon to enjoy the music or podcast 🎧"
              sliderStype="style2"
              posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
              uniqueSliderClass="PageHomeDemo7_section1"
            />
          </div>

          {/* === SECTION 4 === */}
          <SectionMagazine1
            className="py-16 lg:py-28"
            posts={MAGAZINE1_POSTS}
            tabs={MAGAZINE1_TABS}
          />

          {/* === SECTION 3 === */}
          <SectionAds />

          {/* === SECTION 7 === */}
          <SectionMagazine7
            className="py-16 lg:py-28"
            posts={DEMO_POSTS_GALLERY.filter((_, i) => i < 6)}
          />
        </div>

        {/* === SECTION 11 === */}
        <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="relative container">
            <SectionGridPosts
              className="py-16 lg:py-28"
              headingIsCenter
              postCardName="card10V2"
              heading="Explore latest video articles"
              subHeading="Hover on the post card and preview video 🥡"
              posts={DEMO_POSTS_VIDEO.filter((_, i) => i > 5 && i < 12)}
              gridClass="md:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </div>

        <div className="container ">
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

          {/* === SECTION 5 === */}
          <SectionGridAuthorBox
            className="py-16 lg:py-28"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />

          {/* === SECTION 8 === */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionBecomeAnAuthor />
          </div>

          {/* === SECTION 11 === */}
          <SectionMagazine4
            className="py-16 lg:py-28"
            heading="Life styles 🎨 "
            posts={MAGAZINE2_POSTS}
            tabs={MAGAZINE1_TABS}
          />

          {/* === SECTION 12 === */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderPosts
              postCardName="card11"
              heading=" More design articles"
              subHeading="Over 1118 articles "
              posts={DEMO_POSTS.filter(
                (p, i) => i > 3 && i < 25 && p.postType === "standard"
              )}
              sliderStype="style2"
              uniqueSliderClass="PageHomeDemo7_section2"
            />
          </div>

          {/* === SECTION 14 === */}
          <SectionSubscribe2 className="pt-16 lg:pt-28" />

          {/* === SECTION 15 === */}
          <SectionVideos className="py-16 lg:py-28" />

          {/* === SECTION 17 === */}
          <SectionLatestPosts
            className="pb-16 lg:pb-28"
            posts={DEMO_POSTS.filter((_, i) => i > 8 && i < 16)}
            widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
            categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
            tags={DEMO_CATEGORIES}
          />
        </div>
        {/* ======= END CONTAINER ============= */}
      </div>
    </div>
  );
};

export default PageHomeDemo7;
