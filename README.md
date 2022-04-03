<details>
  <summary><h1>Como padronizar códigos com Husky, Eslint e Prettier</h1> </summary>
  <h3>Introdução</h3>
  <h3>Eslint</h3>
  <h3>Prettier</h3>
  <h3>Husky</h3>
  
</details>

<h1>Introdução</h1>

Para padronizar códigos javascript puros ou com algum framework frontEnd a melhor opção sem dúvidas é um trabalho em equipe entre o esLint, o Prettier e também o Husky

Para instalar as extensões em seu vs code basta procurar em sua loja de extensões que você consegue acessar através do botão "extensions" no seu menu lateral do vs code.

Para instalar o Eslint em seu vs code:
<https://github.com/Microsoft/vscode-eslint>

Para instalar o Prettier em seu vs code:
<https://github.com/idahogurl/vs-code-prettier-eslint>

Para instalar o Husky em seu projeto pode se usar o seguinte comando:

<pre>
<code>
npm install husky --save-dev
</code>
</pre>

E em seu package.json

acrescente essa configuração que possibilitará termos em funcionamento as instruções que serão estartadas no pré commmit e no pré push

<pre>
<code>
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
</code>
</pre>

Para instalar o Lint-Staged em seu projeto pode se usar o seguinte comando:

<pre>
<code>
npm install lint-staged --save-dev
</code>
</pre>

E em seu package.json

acrescente essa configuração que possibilitará termos em funcionamento as instruções que serão estartadas no pré commmit e no pré push

<pre>
<code>
  "lint-staged": {
    "**.{js,jsx,ts,tsx,json}": [
        "yarn test --passWithNoTests"
    ]
  },
</code>
</pre>

<strong>Para formatar códigos javascript automaticamente inclua esses códigos em seu ssetings.json do seu vscode:</strong>

<pre>

<code>
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true
  }
</code>

</pre>

<strong>Para formatar códigos typescript automaticamente inclua esses códigos em seu settings.json do seu vscode:</strong>

<pre>
<code>
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
  },
</code>
</pre>

<strong>Para instalar o jest e iniciar rotinas de testes primeiro precisamos definir a hierarquia padrão</strong>

<p>Para cada arquivo que temos interesse em criar uma rotina de teste, podemos criar um arquivo dentro com .spec.js </p>
<img src="https://i.ibb.co/z2nJbg2/estrutura-testes.png" alt="estrutura-testes" border="0"/>

<p>Para instalar o pacote jest em seu projeto podemos usar o comando: </p>
<p>Para instalar com o yarn</p>
<pre>
<code>
  yarn add --dev jest
</code>
</pre>

<p>Para instalar com o npm</p>

<pre>
<code>
npm install --save-dev jest
</code>
</pre>

<p>
Depois de instalar o jest, precisamos de um outro pacote que permite utilizar o import e o export/export default, para solucionar esse problema usamos o babel como um transpilador universal.
</p>

<p>Para instalar o babel para o jest, por favor use esse comando: </p>

<p>Para instalar com o npm</p>

<pre>
<code>
npm install --dev babel-jest @babel/core @babel/preset-env
</code>
</pre>

<p>Para instalar com o yarn</p>

<pre>
<code>
yarn add --dev babel-jest @babel/core @babel/preset-env
</code>
</pre>

<p>E criei um arquivo chamado babel.config.js</p>

<pre>
<code>
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
</code>
</pre>
