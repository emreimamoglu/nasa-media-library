import { Box } from '@mui/material';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { IMediaItem } from '../../services/NasaService/types';
import styles from './styles.module.scss';

interface CardProps {
    photo: IMediaItem;
}

const Card = ({ photo }: CardProps) => {
    const navigate = useNavigate();

    const handleClick = (detail: IMediaItem) => {
        navigate({
            pathname: 'show',
            search: createSearchParams({
                nasaId: detail.data[0].nasa_id,
            }).toString(),
        });
    };

    return (
        <Box className={styles.card} onClick={() => handleClick(photo)}>
            <img src={photo.links[0].href} alt={photo.data[0].title || 'space'} />
            {photo.data[0].title && <h2>{photo.data[0].title}</h2>}
            {photo.data[0].location && <p>{photo.data[0].location}</p>}
        </Box>
    );
};

export default Card;
