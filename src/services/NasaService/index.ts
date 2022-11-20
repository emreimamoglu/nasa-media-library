import axios from 'axios';
import { INasaMediaResponse } from './types';

const baseUrl = 'https://images-api.nasa.gov';

/**
 *
 * @param query
 * @param startDate
 * @param endDate
 * @returns {INasaMediaResponse} image collection
 */
export const searchMedia = (query: string, startDate?: string | null, endDate?: string | null) => {
    return axios.get<INasaMediaResponse>(`${baseUrl}/search`, {
        params: {
            q: query,
            media_type: 'image',
            ...(startDate ? { year_start: startDate } : {}),
            ...(endDate ? { year_end: endDate } : {}),
        },
    });
};

/**
 *
 * @param id
 * @returns {INasaMediaResponse} a single image data
 */
export const getById = (id: string) => {
    return axios.get<INasaMediaResponse>(`${baseUrl}/search`, {
        params: {
            nasa_id: id,
        },
    });
};

/**
 *
 * @param url
 * @returns {string[]} array of urls for different image sizes
 */
export const getMediaDetails = (url: string) => {
    return axios.get<string[]>(url);
};
