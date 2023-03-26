import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/reviews';
const request = requestFactory();

export const getAll = async (tipId) => {
    const searchQuery = encodeURIComponent(`tipId="${tipId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const reviews = Object.values(result);
    return reviews;
};

export const create = async (tipId, review) => {
    const result = await request.post(baseUrl, { tipId, review });

    return result;
}