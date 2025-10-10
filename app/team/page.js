import TeamCard from "../components/TeamCard";

const team = [
  {
    name: "Chala Temesgen",
    role: "Backend Developer",
    image: "/chala.jpg",
    desc: "Backend engineer specializing in Express.js and MongoDB, experienced in building scalable APIs and database architectures for modern web applications.",
    links: {
      github: "https://github.com/chala751",
      linkedin: "https://linkedin.com/in/chalatemesgen",
      telegram: "https://t.me/Ch_601",
      // website: "https://chala.vercel.app"
    },
  },
  {
    name: "Yamlak Negash",
    role: "Founder & Full-Stack Developer",
    image: "/yamlak.jpg",
    desc: "Founder of NYDev and a passionate full-stack developer skilled in React and Django. Focused on creating seamless user experiences and leading innovative digital solutions from concept to deployment.",
    links: {
      github: "https://github.com/yamneg96",
      x: "https://x.com/yamlak_negash",
      // instagram: "https://instagram.com/yamlak_negash",
      telegram: "https://t.me/user1name_123",
      // website: "https://nydevofficial.vercel.app",
    },
  },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Meet Our Team
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}
