import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import TopBar from '../TopBar';
import Searchbar from '../Searchbar';
import styles from './styles.module.scss';

type LayoutProps = {
    children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    return (
        <Box className={styles.layout}>
            <Box className={styles.topBarWrapper}>
                <TopBar />
                {location.pathname === '/' && <Searchbar />}
            </Box>
            <Box className={styles.bodyWrapper}>{children}</Box>
            <Box className={styles.footerWrapper}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;
