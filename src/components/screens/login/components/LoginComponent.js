// @flow

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components';

import BottomContent from './BottomContent';
import ChangeAction from './ChangeAction';
import Input from './Input';

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DefaultText = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Bold;
  color: ${({ color }) => color};
  text-align: center;
`;

const LoginComponent = (): Object => (
  <View>
    <Input
      placeholder="E-mail"
      iconName="email-outline"
      type="emailAddress"
    />
    <Input
      placeholder="Password"
      iconName="lock-outline"
      type="password"
    />
    <ChangeAction
      onPressActionButton={() => {}}
      changeActionText="Register now"
      questionText="Not account?"
      buttonText="LOGIN"
    />
    <BottomContent
      actionSelected="Login"
    />
  </View>
);

export default LoginComponent;