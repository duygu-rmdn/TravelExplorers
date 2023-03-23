import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (tipId) => {
    const query = encodeURIComponent(`tipId=${tipId}`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const reviews = Object.values(result);

    return reviews;
}

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}