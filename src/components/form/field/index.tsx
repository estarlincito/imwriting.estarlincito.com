'use client';
import * as Form from '@radix-ui/react-form';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Flex, TextArea, TextField } from '@radix-ui/themes';
import React, { ChangeEventHandler } from 'react';
import { Name, options } from './option';
import Styled from './styled';

interface Props {
  name: Name;
  required?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value?: string;
  label?: false;
}

const Field: React.FC<Props> = (props) => {
  const { name, required, disabled, onChange, value, label } = props;
  const { type, placeholder, maxLength, minLength, textarea, _name } =
    options(name);

  return (
    <Form.Field name={name} style={Styled.field}>
      <Box>
        {label === false ? null : (
          <Form.Label style={Styled.label}>{_name}</Form.Label>
        )}
        <Form.Message style={Styled.message} match='valueMissing'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please enter your ${_name.toLowerCase()}`}
          </Flex>
        </Form.Message>
        <Form.Message style={Styled.message} match='typeMismatch'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${_name.toLowerCase()}`}
          </Flex>
        </Form.Message>
      </Box>

      <Form.Control asChild>
        {textarea && textarea ? (
          <TextArea
            name={name}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={onChange}
            value={value}
            radius='large'
          />
        ) : (
          <TextField.Root
            radius='large'
            type={type}
            placeholder={placeholder}
            name={name}
            maxLength={maxLength}
            minLength={minLength}
            required={required}
          />
        )}
      </Form.Control>
    </Form.Field>
  );
};

export default Field;
