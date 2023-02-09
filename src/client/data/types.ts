//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: string;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number;
  name: string;
  href: string;
  count?: number;
  thumbnail?: string;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface PostAuthorType {
  id: string | number;
  firstName: string;
  lastName: string;
  full_name: string;
  displayName: string;
  avatar_url: string;
  avatar: string;
  bgImage?: string;
  email?: string;
  posts: number;
  count: number;
  desc: string;
  jobName: string;
  href: string;
}

export interface PostDataType {
  id: string | number;
  authors: PostAuthorType;
  author: PostAuthorType;
  created_at: string;
  post: string;
  date: string;
  href: string;
  categories: TaxonomyType[];
  category?: TaxonomyType[];
  title: string;
  featuredImage: string;
  featured_imghd: string;
  featured_imgsd: string;
  desc?: string;
  like: {
    count: number;
    isLiked: boolean;
  };
  bookmark: {
    count: number;
    isBookmarked: boolean;
  };
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string;
  galleryImgs?: string[];
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}
