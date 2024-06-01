import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
import { Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import { theme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider defaultColorScheme="dark" theme={theme}>
    <Container fluid>
      <App />
    </Container>
  </MantineProvider>,
);
