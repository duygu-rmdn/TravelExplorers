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

export const create = async (tipData) => {
    const result = await request.post(baseUrl, tipData);
    return result;
};

export const remove = async (tipId) => {
    const result = await request.del(`${baseUrl}/${tipId}`);
    return result;
};

export const update = async(tipId, tipData) => {  
    const tip = {
        _id: tipId,
        values: tipData
    };
    const result = await request.put(`${baseUrl}/${tipId}`, tip);
    return result;
}