import '@unocss/reset/eric-meyer.css'
import { AppRoutes } from '@src/routes/AppRoutes';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './themes/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App
