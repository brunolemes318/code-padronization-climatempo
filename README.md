<details>
  <summary><h1>Como padronizar códigos com Husky, Eslint e Prettier, e como ter uma rotina de testes com o jest</h1> </summary>
  <h3>Introdução</h3>
  <h3>Eslint</h3>
  <h3>Prettier</h3>
  <h3>Husky</h3>
  
</details>

<h1>Introdução</h1>
<p>
Para padronizar seus códigos javascript puros ou com algum framework a melhor opção sem dúvidas é um trabalho em equipe entre o esLint um validador de códigos javascript, o Prettier como formatador javascript, e também o Husky que permite que criemos ações antes de qualquer commit ou push, com a ajuda dessa equipe de ferramentas, você e sua equipe poderão padronizar os códigos dos seus projetos.
</p>

<p>
Para instalar as extensões em seu vs code basta procurar em sua loja de extensões que você consegue acessar através do botão "extensions" no seu menu lateral do vs code.
</p>

<p>Para instalar o Eslint em seu vs code:</p>
<https://github.com/Microsoft/vscode-eslint>

<img src="https://i.ibb.co/qm88yz1/extens-o-eslint.png" alt="extens-o-eslint" border="0">

<p>Para instalar o Husky e o lint-stage juntos em seu projeto pode se usar o seguinte comando:
</p>

<p><strong>Com o npm</strong></p>
<pre>
<code>
npm install lint-staged husky --save-dev
</code>
</pre>
<p><strong>Com o yarn</strong></p>
<pre>
<code>
yarn add -D lint-staged husky
</code>
</pre>

<strong>
E em seu package.json
</strong>
<p>
acrescente essa configuração que possibilitará termos em funcionamento as instruções que serão iniciadas no pré commmit e no pré push

</p>

<pre>
<code>
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
</code>
</pre>

<p>Para instalar o Lint-Staged em seu projeto pode se usar o seguinte comando:
</p>
<pre>
<code>
npm install lint-staged --save-dev
</code>
</pre>

<p>E em seu package.json</p>

<p>acrescente essa configuração que possibilitará termos em funcionamento as instruções que serão iniciadas no pré commmit e no pré push
</p>
<pre>
<code>
  "lint-staged": {
    "**.{js,jsx,ts,tsx,json}": [
        "yarn test"
    ]
  },
</code>
</pre>

<strong>Para formatar códigos javascript automaticamente inclua esses códigos em seu settings.json do seu vscode:</strong>

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

<p>Para cada arquivo que temos interesse em criar uma rotina de teste, podemos criar um arquivo dentro com .spec.js, com isso o jest irá reconhecer que é um arquivo de teste, seja usando o npm test, ou yarn test</p>
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

<p>
E acrescente em seu package.json o seguinte trecho de código:
</p>

<pre>
<code>
    "scripts": {
    "build": "babel src -d lib",
    "prebuild": "jest"
  }
</code>
</pre>

<p>Com essas configurações e com um test de exemplo já configurado no codebase, já podemos testar com yarn test ou com npm test, os testes também ser disparados quando fizer um commit através do git commit -m "" e também  são iniciados quando iniciamos o projeto com yarn start ou npm start</p>
