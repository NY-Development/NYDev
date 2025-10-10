import Image from "next/image";

export default function TeamCard({ name, role, image, desc }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center hover:scale-105 transition">
      <Image src={image} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-blue-500">{role}</p>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  );
}
