import { createContext, ReactNode, useState, useContext, useMemo } from 'react';
import { IMediaItem } from '../services/NasaService/types';

interface IMediaListContext {
    list: IMediaItem[];
    setList: React.Dispatch<React.SetStateAction<IMediaItem[]>>;
}

const MediaContext = createContext<IMediaListContext>({
    list: [],
    setList: () => {},
});

type Props = {
    children?: ReactNode;
};

export function MediaContextProvider({ children }: Props) {
    const [list, setList] = useState<IMediaItem[]>([]);

    const mediaContextProviderValues = useMemo(() => ({ list, setList }), [list, setList]);

    return <MediaContext.Provider value={mediaContextProviderValues}> {children} </MediaContext.Provider>;
}

export const useMediaContext = () => useContext(MediaContext);
