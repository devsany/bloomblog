import { business_api } from "../../BUSINESS_API";
export default function handler(req, res) {
  res.status(200).json(business_api);
}
