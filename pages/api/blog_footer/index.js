import { footer1_api } from "../../BLOG_FOOTER_API/BLOG_FOOTER_1";
// import { home_movie_api } from "../../HOME_API/HOME_MOVIE_API";
export default function handler(req, res) {
  res.status(200).json(footer1_api);
}
