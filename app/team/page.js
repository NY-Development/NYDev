import TeamCard from "../components/TeamCard";

const team = [
  { name: "Chala Temesgen", role: "Backend Developer", image: "/team1.jpg", desc: "Visionary developer with 2 years of experience." },
  { name: "Yamlak Negash", role: "CEO & Frontend Developer", image: "/team2.jpg", desc: "Expert in full-stack web development & Passionate about design and user experience." },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, i) => <TeamCard key={i} {...member} />)}
      </div>
    </div>
  );
}
