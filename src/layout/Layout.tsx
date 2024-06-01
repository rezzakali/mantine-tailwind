import { AppShell, Burger, Button, Divider, Group, NavLink, Stack, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import React from 'react';
import ThemeChanger from '../components/ThemeChanger';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={
        !isDesktop
          ? {
              width: 300,
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
            }
          : undefined
      }
      // footer={{ height: 60, offset: true }}
      padding="md"
    >
      <AppShell.Header p={2} px={16}>
        <Group align="center" justify="space-between" p={5}>
          <Text size="xl">R.dev</Text>
          <Group>
            <ThemeChanger />
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </Group>
      </AppShell.Header>

      {!isDesktop && (
        <AppShell.Navbar p="md">
          <Stack h={250} align="stretch" justify="flex-start" gap="xs">
            <NavLink href="#about" label="About" />
            <NavLink href="#about" label="About" />
            <NavLink href="#about" label="About" />
            <NavLink href="#about" label="About" />
            <NavLink href="#about" label="About" />
          </Stack>
          <Divider my={6} />
          <Button>Signin</Button>
        </AppShell.Navbar>
      )}

      <AppShell.Main px={0}>{children}</AppShell.Main>
      {/* <AppShell.Footer p={16}>this is footer</AppShell.Footer> */}
    </AppShell>
  );
};

export default Layout;
