import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Category name="Cursos" icon="code" isSelected={true} />
      <Category name="Inglês" icon="language" isSelected={false} />
      <Category name="Vídeos" icon="ondemand-video" isSelected={false} />
    </View>
  );
}
