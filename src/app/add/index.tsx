import styles from "@/app/add/_styles";
import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handlerAdd() {
    try {
      if (!name.trim()) {
        return Alert.alert("Nome", "Informe um nome para a URL");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Informe uma URL");
      }
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria para a URL");
      }

      await linkStorage.save({
        id: new Date().getTime().toLocaleString(),
        name,
        url,
        category,
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link");
      console.log("Erro ao salvar link: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input
          placeholder="Url"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handlerAdd} />
      </View>
    </View>
  );
}
