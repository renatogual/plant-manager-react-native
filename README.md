<h1 align="center"> 🚀 Demonstração </h1>
<img src="./assets/demo.gif" width="300" height="550">

## 🔖 Sobre

Este projeto foi desenvolvido durante a Next Level Week #5 da plataforma [RocketSeat](https://rocketseat.com.br/).

Plant Manager é um app mobile para lembrar os usuários de regar suas plantinhas.

---

## 🗂 Como executar o projeto

### Pré requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Expo](https://expo.io/).
Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)

Foi utilizado o Expo para facilitar no desenvolvimento do app e também poder rodar a aplicação em um celular com android ou ios sem a necessidade
de configurar e instalar um emulador.

### 🎲 Executando a aplicação

```bash
    # Clone o repositório
    $ git clone https://github.com/renatogual/plant-manager-react-native-nlw5.git

    # Entre no diretório da aplicação
    $ cd plant-manager-react-native-nlw5
    
    # Instale todas depêndencias
    $ npm install ou yarn

    # Instale o Expo cli globalmente
    $ npm install --global expo-cli
    
    # Instale o Json server globalmente
    $ npm install -g json-server
    
    # Inicie o app
    $ expo start

    # Inicie o backend do app alterando o parametro --host com o ip de sua máquina (tem que ser o mesmo que aparece na página do Expo)
    $ json-server ./src/services/server.json --host 192.168.39.229 --port 3333

    # Inicie o app no celular
    Leia o QR code na página do Expo com seu celular, baixe o app do expo e então conseguirá visualizar a aplicação rodando
```

---

## 🛠 Principais ferramentas utilizadas

- **[React Native](https://reactnative.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Expo](https://expo.io/)**
- **[Axios](https://github.com/axios/axios)**
- **[Date-fns](https://date-fns.org/)**

---

