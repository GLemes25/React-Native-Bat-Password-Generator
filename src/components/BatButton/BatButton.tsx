import * as Clipboard from 'expo-clipboard';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Pressable, Text } from 'react-native';
import generatePass from '../../services/passwordService';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { BatButtonStyles } from './BatButtonStyles';

type StateType = {
  password: string;
};

const state: StateType = {
  password: '',
};

makeAutoObservable(state);

export const BatButton = observer(() => {
  const handlePressGenerate = () => {
    state.password = generatePass();
  };

  const handleCopyButton = async () => {
    await Clipboard.setStringAsync(state.password);
  };

  return (
    <>
      <BatTextInput password={state.password} />
      <Pressable onPress={handlePressGenerate} style={BatButtonStyles.button}>
        <Text style={BatButtonStyles.text}>Generate</Text>
      </Pressable>
      <Pressable style={BatButtonStyles.button} onPress={handleCopyButton}>
        <Text style={BatButtonStyles.text}>Copy</Text>
      </Pressable>
    </>
  );
});
