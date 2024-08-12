import { arts_api } from "../../ARTS_API";
export default function handler(req, res) {
  res.status(200).json(arts_api);
}
