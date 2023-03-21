import { requestFactory } from './Oldrequester';
import { baseUrl } from "../constants";

export const tipServiseFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const tips = Object.values(result);

        return tips;
    };

    const getOne = async (tipId) => {
        const result = await request.get(`${baseUrl}/${tipId}`);
        return result;
    };

    const create = async (tipData) => {
        const result = await request.post(baseUrl, tipData);
        return result;
    };

    const remove = async (tipId) => {
        const result = await request.del(`${baseUrl}/${tipId}`);
        return result;
    };

    const update = async (tipId, tip) => {
        const result = await request.put(`${baseUrl}/${tipId}`, tip);
        return result;
    }

    return {
        getAll,
        getOne,
        create,
        remove,
        update
    };
};

