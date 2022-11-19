import axios from 'axios';
import { INasaMediaResponse } from './types';

const baseUrl = 'https://images-api.nasa.gov';

const searchMedia = (query: string, startDate?: string | null, endDate?: string | null) => {
    return axios.get<INasaMediaResponse>(`${baseUrl}/search`, {
        params: {
            q: query,
            media_type: 'image',
            ...(startDate ? { year_start: startDate } : {}),
            ...(endDate ? { year_end: endDate } : {}),
        },
    });
};

export { searchMedia };
