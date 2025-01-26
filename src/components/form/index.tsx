'use client';
import FormState from '@/types/form-state';
import * as RadixForm from '@radix-ui/react-form';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import Button from './button';
import Field from './field';

interface FormProps {
  children: React.ReactNode;
  action?:
    | string
    | ((formData: FormData, state?: FormState) => void | Promise<void>)
    | undefined;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  height?: string;
}

interface FormComponent {
  Button: typeof Button;
  Field: typeof Field;
}

const Form: React.FC<FormProps> & FormComponent = ({
  height,
  action,
  onSubmit,
  children,
}: FormProps) => {
  return (
    <Flex
      height={height}
      asChild
      direction='column'
      p='5'
      gapY='1'
      justify='center'
      width={{ initial: '400px', md: '600px' }}
      style={{
        backgroundColor: 'var(--gray-1)',
        borderRadius: '0.625rem',
        border: '1px solid var(--gray-5)',
      }}
    >
      <RadixForm.Root action={action} onSubmit={onSubmit}>
        {children}
      </RadixForm.Root>
    </Flex>
  );
};

Form.Button = Button;
Form.Field = Field;

export default Form;
