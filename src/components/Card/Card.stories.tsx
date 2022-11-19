import Card from '.';
import { IMediaItem } from '../../services/NasaService/types';

export default {
    title: 'Card',
    component: Card,
};

const mockPhoto: IMediaItem = {
    data: [
        {
            title: 'Title of the photo',
            album: ['Album'],
            center: 'Center',
            date_created: '01/01/2001',
            description: 'Description of the photo',
            description_508: 'Description 508',
            keywords: ['key1', 'key2'],
            location: 'Location of the photograph',
            media_type: 'Media Type',
            nasa_id: 'NasaID',
            photographer: 'Photographer',
        },
    ],
    href: 'https://scitechdaily.com/images/NASA-Wide-Field-Infrared-Survey-Telescope.jpg',
    links: [
        {
            href: 'https://scitechdaily.com/images/NASA-Wide-Field-Infrared-Survey-Telescope.jpg',
            rel: 'rel',
            render: 'render',
        },
    ],
};

export const Primary = () => <Card photo={mockPhoto} />;
