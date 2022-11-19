import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMediaContext } from '../../context';
import { IMediaItem } from '../../services/NasaService/types';
import styles from './styles.module.scss';

interface CardProps {
    photo: IMediaItem;
}

const Card = ({ photo }: CardProps) => {
    const navigate = useNavigate();
    const { setDetail } = useMediaContext();

    const handleClick = (detail: IMediaItem) => {
        setDetail(detail);
        navigate('/show');
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
