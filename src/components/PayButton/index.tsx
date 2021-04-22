import React from 'react'
import { Button, Label } from './styles'
import { MaterialIcons } from '@expo/vector-icons';

import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

interface PayButtonProps extends TouchableWithoutFeedbackProps {
  focused: boolean;
}

export default function PayButton({ onPress, focused }: PayButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={[1, 0.2]}
      >
        <MaterialIcons name="attach-money" size={30} color={focused ? '#000' : '#fff'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}
