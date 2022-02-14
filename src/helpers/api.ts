export const stringifyParams = (params: {
  [key: string]: string | number;
}): string =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
