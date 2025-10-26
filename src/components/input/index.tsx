import { styles } from "@/components/input/styles";
import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
      placeholderTextColor={colors.gray[600]}
    />
  );
}
