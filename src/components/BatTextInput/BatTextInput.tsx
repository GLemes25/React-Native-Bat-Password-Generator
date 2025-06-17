import React from 'react';
import { TextInput } from 'react-native';
import { BatTextInputStyles } from './BatTextInputStyles';

interface BatTextInputProps {
  password: string;
}
export const BatTextInput = (props: BatTextInputProps) => {
  return (
    <TextInput
      style={BatTextInputStyles.inputer}
      placeholder="Password"
      value={props.password}
    />
  );
};
