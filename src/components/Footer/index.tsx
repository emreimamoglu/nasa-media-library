import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { openInNewTab } from '../../utils';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Box className={styles.iconBox}>
                <IconButton className={styles.iconBox} onClick={() => openInNewTab('https://www.instagram.com/nasa')}>
                    <InstagramIcon />
                </IconButton>
                <IconButton className={styles.iconBox} onClick={() => openInNewTab('https://www.twitter.com/nasa')}>
                    <TwitterIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
