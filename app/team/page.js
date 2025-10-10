import TeamCard from "../components/TeamCard";

const team = [
  {
    name: "Chala Temesgen",
    role: "Backend Developer",
    image: "/yamlak.jpg",
    desc: "Backend engineer specializing in Express.js and MongoDB, experienced in building scalable APIs and database architectures for modern web applications.",
  },
  {
    name: "Yamlak Negash",
    role: "Founder & Full-Stack Developer",
    image: "/team2.jpg",
    desc: "Founder of NYDev and a passionate full-stack developer skilled in React and Django. Focused on creating seamless user experiences and leading innovative digital solutions from concept to deployment.",
  },
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
