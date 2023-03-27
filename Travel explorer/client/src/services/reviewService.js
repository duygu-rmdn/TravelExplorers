import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (tipId) => {
    const request = requestFactory();
    const searchQuery = encodeURIComponent(`tipId="${tipId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const reviews = Object.values(result);
    return reviews;
};

export const create = async (tipId, review) => {
    const request = requestFactory();
    const result = await request.post(baseUrl, { tipId, review });

    return result;
}