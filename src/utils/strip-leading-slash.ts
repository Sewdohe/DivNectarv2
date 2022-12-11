export const stripLeadingSlash = (s: string) => {
  const newUrl = s.replace(/^\/|\/$/g, '');
  return newUrl;
};