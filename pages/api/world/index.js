import { world_api } from "../../WORLD_API";
export default function handler(req, res) {
  res.status(200).json(world_api);
}
