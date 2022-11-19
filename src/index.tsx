import React from 'react';
import ReactDOM from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Search from './pages/Search';
import Show from './pages/Show';
import { MediaContextProvider } from './context';
import './globals/globals.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MediaContextProvider>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route index path="/" element={<Search />} />
                            <Route path="/show" element={<Show />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </MediaContextProvider>
        </LocalizationProvider>
    </React.StrictMode>,
);
