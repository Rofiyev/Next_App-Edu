import { teamsData } from "../../../Server";

export default function hundler(req, res) {
  const teamName = `/${req.query.teams}`;

  const team = teamsData.find((item) => item.slug == teamName);

  res.status(200).json(team);
}
