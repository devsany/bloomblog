import { opinion_api } from "../../OPINION_API";
export default function handler(req, res) {
  res.status(200).json(opinion_api);
}
