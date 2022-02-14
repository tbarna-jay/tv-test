export const stringifyParams = (params: { [key: string]: string }): string =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
