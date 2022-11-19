export interface INasaMediaResponse {
    collection: {
        href: string;
        items: IMediaItem[];
        links: {
            href: string;
            prompt: string;
            rel: string;
        }[];
        metadata: {
            total_hits: number;
        };
        version: string;
    };
}

export interface IMediaDetails {
    album: string[];
    center: string;
    date_created: string;
    description: string;
    description_508: string;
    keywords: string[];
    location: string;
    media_type: string;
    nasa_id: string;
    photographer: string;
    title: string;
}

export interface IMediaItem {
    data: IMediaDetails[];
    href: string;
    links: {
        href: string;
        rel: string;
        render: string;
    }[];
}
