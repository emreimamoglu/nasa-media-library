import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './styles.module.scss';

const Footer = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box className={styles.footer}>
            <Box className={styles.iconBox}>
                <IconButton className={styles.iconBox} onClick={() => openInNewTab('https://www.instagram.com/nasa')}>
                    <InstagramIcon />
                </IconButton>
                <IconButton className={styles.iconBox} onClick={() => openInNewTab('https://www.twitter.com/NASA')}>
                    <TwitterIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
