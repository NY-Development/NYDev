"use client";

import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import { Users } from "lucide-react";
import { team } from "../utils/Team";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMembers() {
      try {
        const res = await fetch("/api/members");
        const data = await res.json();
        setMembers(data.members || []);
      } catch (error) {
        console.error("Failed to load members", error);
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
  }, []);

  /* ----------------------------------
     Loading State (optional but clean)
  ----------------------------------- */
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-32 px-6 text-center">
        <p className="text-gray-500 animate-pulse">
          Loading team members...
        </p>
      </div>
    );
  }

  /* ----------------------------------
     Empty State
  ----------------------------------- */
  if (members.length === 0 && team.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-32 px-6 text-center">
        <div
          className="mx-auto max-w-md bg-white dark:bg-gray-900
                     border border-gray-200 dark:border-gray-800
                     rounded-2xl p-10 shadow-xl"
        >
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center justify-center
                         w-16 h-16 rounded-full
                         bg-indigo-100 dark:bg-indigo-900/40
                         text-indigo-600 dark:text-indigo-400"
            >
              <Users size={28} />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
            Members are registering
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Our team members are currently completing their registrations.
            Please check back soon to meet the amazing people behind this
            organization.
          </p>
        </div>
      </div>
    );
  }

  /* ----------------------------------
     Normal Team Grid
  ----------------------------------- */
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Meet Our Team
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {members.length ? members.map((member) => (
          <TeamCard
            key={member._id}
            name={member.name}
            role={member.role}
            desc={member.bio}
            image={member.photoUrl || "/avatar-placeholder.png"}
            links={member.links}
          />
        )) : (
          team.map((t, i) => (
            <TeamCard
              key={t.name}
              name={t.name}
              role={t.role}
              desc={t.desc}
              image={t.image || "/avatar-placeholder.png"}
              links={t.links}
            />
          ))
        )}
      </div>
    </div>
  );
}