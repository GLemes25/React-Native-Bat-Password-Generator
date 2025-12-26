# 🦇 Bat Pass Generator

Aplicativo mobile simples desenvolvido em **React Native com Expo**, que permite ao usuário **gerar senhas aleatórias** com um toque e copiar facilmente para a área de transferência.

O estado do aplicativo é controlado usando **MobX**, tornando a atualização de estado mais reativa e escalável.

---

## 📱 Funcionalidades

- ✅ Geração de senhas aleatórias com caracteres especiais
- ✅ Exibição instantânea da senha gerada
- ✅ Copiar senha para a área de transferência com um botão
- ✅ Interface simples, inspirada na temática "Bat"

---

## 🛠️ Tecnologias usadas

- **React Native**
- **Expo**
- **TypeScript**
- **MobX** (para gerenciamento de estado)
- **React Native Clipboard (expo-clipboard)**

---

## 📂 Estrutura de pastas (simplificada)

```
├── App.tsx
├── src
│   ├── components
│   │   ├── BatButton
│   │   ├── BatLogo
│   │   └── BatTextInput
│   ├── screens
│   │   └── Home.tsx
│   ├── services
│   │   └── passwordService.ts
│   └── stores
│       └── PasswordStore.ts
├── assets
│   └── bat-logo.png
└── app.json
```

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/GLemes25/React-Native-Bat-Password-Generator.git bat-pass-generator
cd bat-pass-generator
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o projeto**

```bash
npm run start
```

4. **Abra no seu emulador ou via Expo Go (celular)**

---

## 🔑 Lógica de geração de senha

As senhas são geradas com um conjunto de caracteres alfanuméricos e especiais:

Exemplo de caracteres usados:

```
Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!
```

Cada senha é gerada com **8 caracteres de comprimento** por padrão.

---

## 🧠 Como funciona o estado com MobX

O projeto utiliza o MobX com o TypeScript carregando na tela.
Toda vez que o usuário clica em **"Generate"**, o MobX atualiza o estado da senha, propagando a alteração para os componentes reativos (`observer`).

Exemplo básico do state:

```ts
import { makeAutoObservable } from "mobx";

type StateType = {
  password: string;
};
const state: StateType = {
  password: "",
};

makeAutoObservable(state);
```

---

## ✅ Melhorias futuras (ideias)

- Permitir escolher o tamanho da senha
- Permitir escolher os tipos de caracteres (números, letras, símbolos)
- Histórico de senhas geradas
- Dark Mode

---

## 🧑‍💻 Autor

Gabriel Lemes de Oliveira

[linkedin.com/in/gabriel-lemes-G25](https://linkedin.com/in/gabriel-lemes-G25)
