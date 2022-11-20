import axios from 'axios';
import { ArrowBackRounded } from '@mui/icons-material';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getById, getMediaDetails } from '../../services/NasaService';
import styles from './styles.module.scss';

const Show = () => {
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const id = searchParams.get('nasaId');

        if (id) {
            setLoading(true);
            getById(id)
                .then((res) => res.data)
                .then((res) => {
                    setDetail(res.collection.items[0]);
                    getMediaDetails(res.collection.items[0].href)
                        .then((res) => res.data)
                        .then((res) => setImage(res[0].split('.').pop() === 'tif' ? res[1] : res[0]));
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    return (
        <Box className={styles.container}>
            <Box className={styles.leftContainer}>
                {!loading && (
                    <Box className={styles.imageContainer}>
                        {image && <img src={image} alt={detail?.data[0].title} />}
                    </Box>
                )}
                {loading && <CircularProgress sx={{ color: 'gray' }} />}
            </Box>
            <Box className={styles.rightContainer}>
                {detail && (
                    <>
                        <Box className={styles.backIcon}>
                            <IconButton onClick={() => navigate(-1)}>
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
