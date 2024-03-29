import axios, { AxiosResponse } from "axios";
import { API_URL } from "./constants";

export const get = async<T>(query: string): Promise<AxiosResponse<T>> => {
    return axios.get(`${API_URL}${query}`);
};