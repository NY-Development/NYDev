import Image from "next/image";
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  Send,
  Link as LinkIcon,
  Youtube,
  CodeXml,
} from "lucide-react";

/* -------------------------------------------------
   Icon registry (single source of truth)
-------------------------------------------------- */
const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
  x: Twitter,
  facebook: Facebook,
  telegram: Send,
  website: LinkIcon,
  leetcode: CodeXml,
};

/* -------------------------------------------------
   Deterministic render order
-------------------------------------------------- */
const SOCIAL_ORDER = [
  "website",
  "linkedin",
  "github",
  "instagram",
  "youtube",
  "x",
  "facebook",
  "telegram",
  "leetcode"
];

/* -------------------------------------------------
   Optional click tracking (safe no-op by default)
-------------------------------------------------- */
function trackSocialClick({ name, platform, url }) {
  // Example: analytics, logging, or audit trail
  // This will NOT block navigation
  try {
    console.info("[TeamCard] Social click:", {
      member: name,
      platform,
      url,
      timestamp: Date.now(),
    });
  } catch {
    // fail silently
  }
}

export default function TeamCard({
  name,
  role,
  image,
  desc,
  links = {},
}) {
  /* -------------------------------------------------
     Normalize + order links
  -------------------------------------------------- */
  const orderedLinks = SOCIAL_ORDER
    .map((key) => {
      if (!links[key] || !socialIcons[key]) return null;
      return { key, url: links[key], Icon: socialIcons[key] };
    })
    .filter(Boolean);

  return (
    <div
      className="relative flex flex-col items-center bg-white dark:bg-gray-900
                 rounded-2xl p-8
                 shadow-xl dark:shadow-2xl dark:shadow-indigo-900/10
                 border border-gray-100 dark:border-gray-800
                 hover:shadow-indigo-500/30 hover:scale-[1.02]
                 transition-all duration-300 ease-out"
    >
      {/* ----------------- Image ----------------- */}
      <div className="relative w-32 h-32 mx-auto mb-5 rounded-full ring-4 ring-indigo-500/50 dark:ring-indigo-400/50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
          priority={false}
        />
      </div>

      {/* ----------------- Text ----------------- */}
      <h3 className="line-clamp-1 text-2xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
        {name}
      </h3>

      <p className="line-clamp-1 text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
        {role}
      </p>

      <p className="line-clamp-3 mt-2 text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">
        {desc}
      </p>

      {/* ----------------- Social Links ----------------- */}
      {orderedLinks.length > 0 && (
        <div
          className="flex justify-center flex-wrap gap-4 pt-4
                     border-t border-gray-200 dark:border-gray-700 w-full"
        >
          {orderedLinks.map(({ key, url, Icon }) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${name}'s ${key}`} // tooltip
              aria-label={`Visit ${name}'s ${key}`}
              onClick={() =>
                trackSocialClick({
                  name,
                  platform: key,
                  url,
                })
              }
              className="text-gray-500 hover:text-indigo-600
                         dark:hover:text-indigo-400
                         transition-colors duration-200
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 rounded"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}