import { SimpleGrid } from '@mantine/core';
import DemoCard from './components/Card';
import Demo from './components/Demo';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Demo />

      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
          md: 4,
          lg: 4,
        }}
        spacing={{
          base: 20,
          sm: 'xl',
          md: 'md',
          lg: 'lg',
        }}
        verticalSpacing={{
          base: 'md',
          md: 'md',
          lg: 'lg',
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <DemoCard key={index} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export default App;
