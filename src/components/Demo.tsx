import { Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ModalDemo from './Modal';

const Demo = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="py-2">
      <Button onClick={open}>Open modal</Button>
      <Text truncate="end">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sint aliquam tenetur velit iusto,
        facere sed fugiat adipisci nulla provident unde vitae nihil quo libero magni perferendis rerum? Optio,
        dolores.
      </Text>
      <ModalDemo opened={opened} close={close} />
    </div>
  );
};

export default Demo;
