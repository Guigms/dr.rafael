# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Envio de pedidos do material gratuito EDUSAUDE

O formulário `/edu` envia nome, e-mail e telefone para o Web3Forms. O responsável
da EDUSAUDE poderá entrar em contato com a pessoa interessada; depois da
confirmação do envio, o PDF é baixado na página. O site não armazena os dados.

### Configurar o Web3Forms

1. Gere uma Access Key em [web3forms.com](https://web3forms.com/) usando o
   endereço de e-mail que deve receber os pedidos.
2. Crie `frontend/.env.local` com a chave:

   ```env
   REACT_APP_WEB3FORMS_ACCESS_KEY=sua_access_key
   REACT_APP_WEB3FORMS_CC_EMAIL=outro-destinatario@exemplo.com
   ```

   O arquivo `.env.local` é ignorado pelo Git. A Access Key do Web3Forms é
   usada no navegador e fica incluída no build do site; restrinja o domínio
   autorizado nas configurações do Web3Forms, se disponível. O endereço de
   cópia é opcional e requer um plano Web3Forms Pro ativo; sem esse plano,
   configure a Access Key com o endereço principal que deve receber os pedidos.

3. Gere o build depois de configurar a chave:

   ```sh
   cd frontend
   npm run build
   ```

4. Publique o conteúdo de `frontend/build` na pasta pública do domínio. Não é
   necessário instalar PHP, Composer ou configurar SMTP para esse formulário.
