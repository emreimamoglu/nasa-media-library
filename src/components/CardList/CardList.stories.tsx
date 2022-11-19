import CardList from '.';
import { IMediaItem } from '../../services/NasaService/types';

export default {
    title: 'CardList',
    component: CardList,
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

export const Primary = () => <CardList list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => mockPhoto)} />;
