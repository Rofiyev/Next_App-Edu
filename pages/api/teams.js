import { teamsData } from "../../Server";

export default function hundler(req, res) {
  res.status(200).json(teamsData);
}
