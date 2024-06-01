import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';

function DemoCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={100}
          alt="Norway"
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Text>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours.
      </Text>

      <h1>Hello there</h1>
      <Button size="xs" fullWidth mt="md" radius="md" color="brand.3">
        Book classic tour now
      </Button>
    </Card>
  );
}
export default DemoCard;
