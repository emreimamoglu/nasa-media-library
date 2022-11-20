import { render, screen, fireEvent } from '@testing-library/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { act } from 'react-dom/test-utils';
import Searchbar from '.';
import { BrowserRouter } from 'react-router-dom';

/**
 * @jest-environment jsdom
 */

describe('Searchbar', () => {
    it('tests search action validation failuire', async () => {
        render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                    <Searchbar />
                </BrowserRouter>
            </LocalizationProvider>,
        );
        const searchButton = await screen.findByRole('button', {
            name: 'Search',
        });
        act(() => fireEvent.click(searchButton));

        const validationErrorText = await screen.findByText('Search Field is required');
        expect(validationErrorText).toBeDefined();
    });

    it('tests search action validation pass', async () => {
        render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                    <Searchbar />
                </BrowserRouter>
            </LocalizationProvider>,
        );
        const searchInput = await screen.findByPlaceholderText('Search Nasa Media');
        fireEvent.change(searchInput, { target: { value: 'mars' } });

        const searchButton = await screen.findByRole('button', {
            name: 'Search',
        });
        act(() => fireEvent.click(searchButton));

        const validationErrorText = screen.queryByText('Search Field is required');
        expect(validationErrorText).toBeFalsy();
    });
});
