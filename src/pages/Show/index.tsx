import axios from 'axios';
import { ArrowBackRounded } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaContext } from '../../context';
import styles from './styles.module.scss';

const Show = () => {
    const [image, setImage] = useState<string | null>(null);
    const { detail } = useMediaContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (detail) {
            axios
                .get(detail.href)
                .then((res) => res.data)
                .then((res) => {
                    setImage(res[0].split('.').pop() === 'tif' ? res[1] : res[0]);
                });
        }
    }, []);

    return (
        <Box className={styles.container}>
            <Box className={styles.leftContainer}>
                <Box className={styles.imageContainer}>{image && <img src={image} alt={detail?.data[0].title} />}</Box>
            </Box>
            <Box className={styles.rightContainer}>
                {detail && (
                    <>
                        <Box className={styles.backIcon}>
                            <IconButton onClick={() => navigate('/')}>
                                <ArrowBackRounded />
                            </IconButton>
                        </Box>
                        <Box>
                            <Typography className={styles.title} variant="caption">
                                {detail.data[0].title}
                            </Typography>
                        </Box>
                        <Box className={styles.descriptionSection}>
                            <Typography variant="caption">{detail.data[0].description}</Typography>
                        </Box>
                        <Box className={styles.infoSection}>
                            {detail.data[0].photographer && (
                                <Typography variant="caption">{`By ${detail.data[0].photographer}`}</Typography>
                            )}
                            <Typography variant="caption">{detail.data[0].location}</Typography>
                            <Typography variant="caption">
                                {format(new Date(detail.data[0].date_created), 'MM/yyyy')}
                            </Typography>
                            <Typography variant="caption">Keywords : {detail.data[0].keywords.toString()}</Typography>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Show;
