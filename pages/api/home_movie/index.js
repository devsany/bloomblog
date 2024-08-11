import { home_movie_api } from "../../HOME_API/HOME_MOVIE_API";
export default function handler(req, res) {
  res.status(200).json(home_movie_api);
}
