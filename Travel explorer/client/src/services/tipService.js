import { baseUrl } from '../constants';
import { requestFactory } from './requester';

export const tipServiceFactory = (token) => {
    const request = requestFactory(token);
 
    const getAll = async () => {
 
        try {
            const result = await request.get(baseUrl);
            const tips = Object.values(result);
            
            return tips;
        } catch (error) {
            console.log('Cannot get tips!');
        }
    };

    const getOne = async (tipId) => {
 
        try {
            const result = await request.get(`${baseUrl}/${tipId}`);
            return result;
        } catch (error) {
            console.log('Cannot get this tip!');
        }
    };

    const create = async (tipData) => {
        try {
            const result = await request.post(baseUrl, tipData);
            return result;
        } catch (error) {
            console.log('Cannot create this tip!');
        }
    };

    const remove = async (tipId) => {
        try {
            const result = await request.delete(`${baseUrl}/${tipId}`);
            return result;
        } catch (error) {
            console.log('Cannot remove this tip!');
        }
    };

    const update = async (tipId, tipData) => {
        try {
            const result = await request.put(`${baseUrl}/${tipId}`, tipData);
            return result;
        } catch (error) {
            console.log('Cannot update this tip!');
        }
    }

    return {
        getAll,
        getOne,
        create,
        update,
        remove,
    };
} 