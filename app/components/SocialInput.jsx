import {SOCIAL_PLATFORMS} from '../data/courseData'


const SocialInput = ({ platform, value, onChange }) => {
  const config = SOCIAL_PLATFORMS[platform];
  const fullUrl = value ? `${config.baseUrl}${value}` : "";

  return (
    <div>
      <label className="block font-medium mb-1">{config.label}</label>

      <input
        type="text"
        className="w-full border p-3 rounded-md"
        placeholder={config.placeholder}
        value={value}
        onChange={(e) =>
          onChange(platform, e.target.value.replace("@", ""))
        }
      />

      {value && (
        <p className="text-sm text-gray-400 mt-1">
          Generated link:{" "}
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            {fullUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default SocialInput