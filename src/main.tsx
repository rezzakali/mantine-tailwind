import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
import { Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider defaultColorScheme="dark">
    <Container fluid>
      <App />
    </Container>
  </MantineProvider>,
);
