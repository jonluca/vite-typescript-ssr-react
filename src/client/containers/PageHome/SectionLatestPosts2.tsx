import React, { FC } from "react";
import Card3 from "components/Card3/Card3";
import Heading from "components/Heading/Heading";
import WidgetTags from "components/WidgetTags/WidgetTags";
import { DEMO_POSTS } from "data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { PostAuthorType, PostDataType, TaxonomyType } from "data/types";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import { DEMO_AUTHORS } from "data/authors";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";

// THIS IS DEMO FOR MAIN DEMO
// OTHER DEMO WILL PASS PROPS
const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 17);
const widgetPostsDemo: PostDataType[] = DEMO_POSTS.filter(
  (_, i) => i > 2 && i < 7
);
const tagsDemo = DEMO_TAGS.filter((_, i) => i > 5);
const categoriesDemo: TaxonomyType[] = DEMO_CATEGORIES.filter(
  (_, i) => i > 7 && i < 13
);
const authorsDemo: PostAuthorType[] = DEMO_AUTHORS.filter((_, i) => i < 5);

//
export interface SectionLatestPostsProps {
  posts?: PostDataType[];
  widgetPosts?: PostDataType[];
  categories?: TaxonomyType[];
  tags?: TaxonomyType[];
  authors?: PostAuthorType[];
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  posts = postsDemo,
  widgetPosts = widgetPostsDemo,
  categories = categoriesDemo,
  tags = tagsDemo,
  authors = authorsDemo,
}) => {
  return (
    <div className="nc-SectionLatestPosts">
      <div className="container flex flex-col py-10 lg:flex-row lg:py-14">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14 2xl:pr-20">
          <Heading className="mb-10 text-neutral-900 dark:text-neutral-50">
            🎉 Latest Articles
          </Heading>
          <div className="space-y-12">
            {posts.map((post) => (
              <Card3 size="large" key={post.id} post={post} />
            ))}
          </div>
          <div className="flex flex-col mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>
        <div className="w-full space-y-6 mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetTags tags={tags} />
          <WidgetCategories categories={categories} />
          <WidgetAuthors authors={authors} />
          <WidgetPosts posts={widgetPosts} />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
