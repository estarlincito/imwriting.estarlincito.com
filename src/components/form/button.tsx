import * as Form from '@radix-ui/react-form';
import { Button as RadixButton } from '@radix-ui/themes';
import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ disabled, label }) => {
  return (
    <Form.Submit asChild>
      <RadixButton
        size='4'
        variant='soft'
        disabled={disabled}
        className='--cursor-button'
      >
        {label}
      </RadixButton>
    </Form.Submit>
  );
};

export default Button;
