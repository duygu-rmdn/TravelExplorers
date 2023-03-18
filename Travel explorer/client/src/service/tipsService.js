import * as request  from "./requester";
import { baseUrl } from "../constants";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const tips = Object.values(result);

    return tips;
};

export const getOne = async (tipId) => {
    const result = await request.get(`${baseUrl}/${tipId}`);
    return result;
};

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);
    return result;
};