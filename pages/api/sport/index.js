import { sport_api } from "../../SPORT_API";
export default function handler(req, res) {
  res.status(200).json(sport_api);
}
