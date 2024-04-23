import {
  View,
  Image,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  ImageSourcePropType,
} from 'react-native';

interface CustomTextInputProps {
  name: string;
  value: string;
  handleChange: any;
  srcImage?: ImageSourcePropType;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  const {
    name,
    value,
    handleChange,
    srcImage = false,
    placeholder = '',
    keyboardType = 'default',
    secureTextEntry = false,
  } = props;

  return (
    <View style={styles.formInput}>
      {srcImage && <Image style={styles.formIcon} source={srcImage} />}

      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => handleChange(name, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
});
