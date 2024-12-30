export const sanitizeLogoPath = (path) =>
  path.startsWith("./") ? path.replace("./", "/") : path;
