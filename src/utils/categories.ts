import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Cursos", icon: "code" },
  { id: "2", name: "Projetos", icon: "folder" },
  { id: "3", name: "Sites", icon: "language" },
  { id: "4", name: "Artigos", icon: "newspaper" },
  { id: "5", name: "Vídeos", icon: "movie" },
  { id: "6", name: "Documentações", icon: "content-paste" },
];
