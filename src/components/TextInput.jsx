import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 8,
    padding: 6,
    borderColor: theme.colors.inputBorder,
    borderStyle: 'solid'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    style,
    error && { borderColor: 'red' }
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput