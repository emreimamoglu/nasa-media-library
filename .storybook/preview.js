import { LocalizationProvider } from "@mui/x-date-pickers";
import { BrowserRouter} from "react-router-dom";
import { MediaContextProvider } from '../src/context';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './wrapper.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MediaContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </MediaContextProvider>
    </LocalizationProvider>
  ),
];