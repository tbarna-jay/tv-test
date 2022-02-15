import getConfig from "next/config";
import { stringifyParams } from "../helpers/api";
import { ApiResponse, Schedule } from "../model/api";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

type SheduleParam = {
  country: "GB" | "US";
  date?: string;
};

const getShedule = async (
  params: SheduleParam
): Promise<ApiResponse<Schedule[]>> => {
  try {
    const url = `${apiUrl}/schedule?${stringifyParams(params)}`;
    console.log(url);
    const res = await fetch(url);
    const errorCode = res.ok ? res?.status : 500;
    const content = await res.json();
    if (!content || errorCode !== 200)
      console.error("API error: ", errorCode, url);

    return { content, errorCode: errorCode };
  } catch (error) {
    console.error(error);
    return { errorCode: 500 };
  }
};

export default {
  getShedule,
};
