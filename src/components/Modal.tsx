import { Button, Checkbox, Group, Modal, PasswordInput, TextInput } from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { IconAt } from '@tabler/icons-react';

const ModalDemo = ({ close, opened }: { close: () => void; opened: boolean }) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },

    validate: {
      name: isNotEmpty('Please enter your name'),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value: string) =>
        /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(value)
          ? null
          : 'Invalid phone',
      password: hasLength({ min: 8, max: 12 }, 'Password must be 8 characters long!'),
      confirmPassword: hasLength({ min: 8, max: 12 }, 'Confirm password must be 8 characters long!'),
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    form.reset();
    close();
  };

  return (
    <Modal opened={opened} onClose={close} title="Authentication" size={'lg'} centered>
      <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
        <Group grow>
          <TextInput
            withAsterisk
            label="Your name"
            placeholder="Enter your name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />

          <TextInput
            withAsterisk
            label="Phone"
            placeholder="Your phone number"
            key={form.key('phone')}
            {...form.getInputProps('phone')}
          />
        </Group>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
          leftSection={<IconAt size={16} />}
          leftSectionPointerEvents="none"
          mt={6}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter a password"
          key={form.key('password')}
          {...form.getInputProps('password')}
          mt={6}
        />
        <PasswordInput
          withAsterisk
          label="Confirm password"
          placeholder="Confirm your password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
          mt={6}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  );
};

export default ModalDemo;
