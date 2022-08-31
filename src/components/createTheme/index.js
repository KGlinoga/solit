//allows color customization for components
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#FE9D7F',
      contrastText: '#034F42',
    },
  },
});

export default theme;