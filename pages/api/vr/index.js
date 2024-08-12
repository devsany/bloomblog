import { vr_api } from "../../VR_API";
export default function handler(req, res) {
  res.status(200).json(vr_api);
}
