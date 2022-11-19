import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <Box className={styles.topbar}>
            <Box className={styles.headerText} onClick={() => navigate('/')}>
                <h1>Nasa Media Library</h1>
            </Box>
        </Box>
    );
};

export default TopBar;
