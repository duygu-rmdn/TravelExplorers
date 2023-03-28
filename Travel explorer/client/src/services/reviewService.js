import { requestFactory } from './requester';
import { baseUrlForReviews } from '.././constants'

const baseUrl = baseUrlForReviews;

export const getAll = async (tipId) => {
    const request = requestFactory();

    try {
        const searchQuery = encodeURIComponent(`tipId="${tipId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    
        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
        const reviews = Object.values(result);
        return reviews;
    } catch (error) {
        console.log(error.message)
    }
};

export const create = async (tipId, review) => {
    const request = requestFactory();
    try {
        const result = await request.post(baseUrl, { tipId, review });
    
        return result;
    } catch (error) {
        console.log(error.message)
    }
};

export const getCount = async () => {
    const request = requestFactory();
    const result = await request.get(baseUrl);
    const reviews = Object.values(result);
    
    return reviews.length;
};