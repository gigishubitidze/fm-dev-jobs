export const sanitizeLogoPath = (path) => {
  const sanitizedUrl = path.startsWith("./") ? path.replace("./", "") : path;
  return `${process.env.PUBLIC_URL}/${sanitizedUrl}`;
};
