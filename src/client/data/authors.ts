import __authors from "./jsons/__users.json";
import a1 from "./avatars/1.jpg";
import a2 from "./avatars/2.jpg";
import a3 from "./avatars/3.jpg";
import a4 from "./avatars/4.jpg";
import a5 from "./avatars/12.jpg";
import a6 from "./avatars/6.jpg";
import a7 from "./avatars/7.jpg";
import a8 from "./avatars/8.jpg";
import a9 from "./avatars/9.jpg";
import a10 from "./avatars/11.jpg";
import { PostAuthorType } from "./types";

let as = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

const DEMO_AUTHORS: PostAuthorType[] = __authors.map((item, index) => ({
  ...item,
  avatar: as[index],
}));

export { DEMO_AUTHORS };
