import { home_news_api } from "../../HOME_API/HOME_NEWS_API";
export default function handler(req, res) {
  res.status(200).json(home_news_api);
}
