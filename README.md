# LinkNest: Seu Organizador de Links Pessoal

O LinkNest é um aplicativo móvel, desenvolvido com React Native e Expo, projetado para ajudar você a salvar, categorizar e gerenciar todos os seus links importantes em um único lugar. Com uma interface limpa e intuitiva, você pode facilmente adicionar novos links, organizá-los em categorias personalizadas e acessá-los rapidamente sempre que precisar.

## ✨ Funcionalidades

*   **Salvar Links:** Adicione links da web de forma rápida.
*   **Categorização:** Crie e atribua categorias para manter seus links organizados.
*   **Interface Simples:** Uma experiência de usuário direta e focada na eficiência.
*   **Multiplataforma:** Funciona em dispositivos iOS e Android.

## 🚀 Tecnologias Utilizadas

*   **Framework:** [React Native](https://reactnative.dev/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Ambiente:** [Expo (Managed Workflow)](https://expo.dev/)
*   **Roteamento:** [Expo Router](https://expo.github.io/router/)
*   **Estilização:** React Native StyleSheet para componentização de estilos.
*   **Armazenamento Local:** Uso de `AsyncStorage` para persistir os links no dispositivo.

## 🏁 Como Começar

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão LTS)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
*   App [Expo Go](https://expo.dev/go) em seu dispositivo móvel (iOS ou Android) para testes.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Eduardo-556/linkNest.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd links
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

1.  Inicie o servidor de desenvolvimento do Expo:
    ```bash
    npx expo start
    ```
2.  Abra o aplicativo **Expo Go** em seu smartphone e escaneie o QR Code exibido no terminal. Isso irá carregar o aplicativo no seu dispositivo.

## 📱 Como Usar o App

1.  **Tela Principal:** Ao abrir o app, você verá a lista de links já salvos.
2.  **Filtrar por Categoria:** No topo da tela, você pode selecionar uma categoria para visualizar apenas os links associados a ela.
3.  **Adicionar um Novo Link:** Toque no botão para adicionar um novo link. Você será redirecionado para uma nova tela.
4.  **Formulário de Adição:** Insira a URL do link e selecione a categoria desejada.
5.  **Salvar:** Ao salvar, o novo link aparecerá na lista da tela principal.
