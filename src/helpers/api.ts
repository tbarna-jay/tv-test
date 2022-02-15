export const stringifyParams = (params?: {
  [key: string]: string | number;
}): string => {
  if (!params) return "";
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
