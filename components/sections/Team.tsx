import TeamSlider from "./TeamSlider";

async function getTeams() {
  const res = await fetch("http://localhost:3000/api/team", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  } else {
    return res.json();
  }
}

export default async function TeamPage() {
  const { data: teams } = await getTeams();
  return <TeamSlider teams={teams} />;
}
