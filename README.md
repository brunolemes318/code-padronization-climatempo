Para padronizar códigos javascript puros ou com algum framework frontEnd a melhor opção sem dúvidas é um trabalho em equipe entre o esLint, o Prettier e também o Husky


Para instalar as extensões em seu vs code basta procurar em sua loja de extensões que você consegue acessar através do botão "extensions" no seu menu lateral do vs code. 


Para instalar o Eslint em seu vs code:
https://github.com/Microsoft/vscode-eslint

Para instalar o Prettier em seu vs code:
https://github.com/idahogurl/vs-code-prettier-eslint

Para formatar códigos javascript automaticamente inclua esses códigos em seu ssetings.json do seu vscode:

"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true
  }
  
Para formatar códigos typescript automaticamente inclua esses códigos em seu ssetings.json do seu vscode:

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
  },
