import React, { useEffect } from "react";
import SectionLatestPosts from "./SectionLatestPosts";
import { Helmet } from "react-helmet";
import { DEMO_POSTS_NEWS } from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import SectionAds from "./SectionAds";
import SectionMagazine2 from "./SectionMagazine2";
import SectionMagazine10 from "./SectionMagazine10";
import SectionMagazine9 from "./SectionMagazine9";
import SectionMagazine11 from "./SectionMagazine11";
import imgAds from "images/ads2.png";

//
const MAGAZINE1_TABS = ["all", "Garden", "Fitness", "Design"];
const MAGAZINE1_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 7);
//

const PageHomeDemo6: React.FC = () => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-demo-6 theme-purple-blueGrey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ]">
      <Helmet>
        <title>Home || Blog Magazine React Template</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======= START CONTAINER ============= */}
        <div className="container relative">
          <SectionMagazine10 tabs={[]} heading="" posts={MAGAZINE1_POSTS} />
          {/* === SECTION 9 === */}
          <SectionMagazine9
            gapClassName="gap-6"
            className="pt-16 lg:pt-24"
            posts={DEMO_POSTS_NEWS.filter((_, i) => i >= 6 && i < 18)}
          />
          {/* === SECTION 3 === */}
          <SectionAds imgAds={imgAds} className="pt-16 lg:pt-24" />

          {/* === SECTION 4 === */}
          <SectionMagazine2
            className="pt-16 lg:pt-24"
            heading="Latest Articles"
            posts={MAGAZINE2_POSTS}
            tabs={MAGAZINE1_TABS}
          />

          {/* === SECTION 11 === */}
          <SectionMagazine11 className="py-16 lg:py-24" />
        </div>

        {/* === SECTION 11 === */}
        <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="relative container">
            <SectionLatestPosts
              heading="Latest Articles"
              className="py-16 lg:py-24"
              posts={DEMO_POSTS_NEWS.filter((_, i) => i > 7 && i < 18)}
              widgetPosts={DEMO_POSTS_NEWS.filter((_, i) => i > 2 && i < 7)}
              categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
              tags={DEMO_CATEGORIES}
              postCardName="card4"
              gridClass="sm:grid-cols-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeDemo6;
