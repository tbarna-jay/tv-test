import getConfig from "next/config";
import { stringifyParams } from "../helpers/api";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

type fetcherParams = {
  params: { [key: string]: string };
  path: string;
};

export const fetcher = async ({ params, path }: fetcherParams) => {
  const url = `${apiUrl}${path}?${stringifyParams(params)}`;
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data."
    ) as Error & { info: unknown; status: number };
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return await res.json();
};
