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
https://github.com/Microsoft/vscode-eslint

Para instalar o Prettier em seu vs code:
https://github.com/idahogurl/vs-code-prettier-eslint


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
{
  "husky": {
    "hooks": {
      "pre-commit": "", // seu comando vai aqui
      "pre-push": "", // seu comando vai aqui
      "...": "..."
    }
  }
}
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
    "*.js,jx":[
    
    ]
  }
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
