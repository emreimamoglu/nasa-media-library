import { createContext, ReactNode, useState, useContext, useMemo } from 'react';
import { IMediaItem } from '../services/NasaService/types';

interface IMediaListContext {
    list: IMediaItem[];
    detail: IMediaItem | null;
    setList: React.Dispatch<React.SetStateAction<IMediaItem[]>>;
    setDetail: React.Dispatch<React.SetStateAction<IMediaItem | null>>;
}

const MediaContext = createContext<IMediaListContext>({
    list: [],
    setList: () => {},
    detail: null,
    setDetail: () => {},
});

type Props = {
    children?: ReactNode;
};

export function MediaContextProvider({ children }: Props) {
    const [list, setList] = useState<IMediaItem[]>([]);
    const [detail, setDetail] = useState<IMediaItem | null>(null);

    const mediaContextProviderValues = useMemo(
        () => ({ list, setList, detail, setDetail }),
        [list, setList, detail, setDetail],
    );

    return <MediaContext.Provider value={mediaContextProviderValues}> {children} </MediaContext.Provider>;
}

export const useMediaContext = () => useContext(MediaContext);
