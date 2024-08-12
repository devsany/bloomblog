import { science_api } from "../../SCIENCE_API";
export default function handler(req, res) {
  res.status(200).json(science_api);
}
