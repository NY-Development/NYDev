export const generateSocialLinks = (form) => {
  const links = {};

  Object.keys(SOCIAL_PLATFORMS).forEach((key) => {
    if (form[key]) {
      links[key] = `${SOCIAL_PLATFORMS[key].baseUrl}${form[key]}`;
    }
  });

  return links;
};