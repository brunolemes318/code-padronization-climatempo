<style>
code {
  font-family: Consolas,"courier new";
  color: crimson;
  background-color: #f1f1f1;
  padding: 2px;
  font-size: 105%;
}
</style>

<details>
  <summary>Como padronizar códigos com Husky, Eslint e Prettier </summary>
  <h3>Introdução</h3>
</details>

<h1>Introdução</h1>

Para padronizar códigos javascript puros ou com algum framework frontEnd a melhor opção sem dúvidas é um trabalho em equipe entre o esLint, o Prettier e também o Husky


Para instalar as extensões em seu vs code basta procurar em sua loja de extensões que você consegue acessar através do botão "extensions" no seu menu lateral do vs code. 


Para instalar o Eslint em seu vs code:
https://github.com/Microsoft/vscode-eslint

Para instalar o Prettier em seu vs code:
https://github.com/idahogurl/vs-code-prettier-eslint

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
