# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



1. Why do we need to `import React from "react"` in our files?
to use jsx (html inside js)

2. If I were to console.log(page) in index.js, what would show up?
a js object in json format

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
needs div or fragment

4. What does it mean for something to be "declarative" instead of "imperative"?
tell what needs to be done, not how it needs to be done

5. What does it mean for something to be "composable"?
divide a page into several components which can be reused multiple times


-----


1. What is a React component?
A reusable function which returns jsx react elements. Pascal casing html element

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
no Pascal Casing 

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

no round brackets but pointy brackets






navbar
  Logo
  Title

Main
  Heading
  List




















