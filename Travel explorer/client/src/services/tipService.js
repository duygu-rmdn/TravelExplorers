import { baseUrl } from '../constants';
import { requestFactory } from './requester';

export const tipServiceFactory = (token) => {
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
        if (tipData.category === '') {
            tipData.category = 'Sea'
        }

        if (tipData.country === '') {
            tipData.country = 'Afghanistan';
        }
        const result = await request.post(baseUrl, tipData);
        return result;
    };

    const remove = async (tipId) => {
        const result = await request.delete(`${baseUrl}/${tipId}`);
        return result;
    };

    const update = async (tipId, tipData) => {
        const result = await request.put(`${baseUrl}/${tipId}`, tipData);
        return result;
    }

    return {
        getAll,
        getOne,
        create,
        update,
        remove,
    };
} 