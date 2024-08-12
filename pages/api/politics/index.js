import { politics_api } from "../../POLITICS_API";
export default function handler(req, res) {
  res.status(200).json(politics_api);
}
