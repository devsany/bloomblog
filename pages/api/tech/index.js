import { tech_api } from "../../TECH_API";
export default function handler(req, res) {
  res.status(200).json(tech_api);
}
