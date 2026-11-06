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

## Envio automático do material EDUSAUDE na HostGator

O formulário `/edu` usa `api/material-gratuito.php` para notificar
`rafaeldantas@rafaeldantasfisio.com.br` e enviar o PDF anexado ao e-mail do
interessado. O envio é feito pelo SMTP do Titan via PHPMailer. O site não salva
os cadastros no banco de dados.

### Publicar o site

1. Gere o site com `npm run build`.
2. No Gerenciador de arquivos da HostGator, envie **o conteúdo** da pasta
   `frontend/build` para a pasta pública do domínio, normalmente `public_html`.
   Confira que o PDF, `api/material-gratuito.php` e `api/composer.json` também
   foram enviados.
3. No Terminal da HostGator, instale o PHPMailer:

   ```sh
   cd ~/public_html/api
   composer install --no-dev --optimize-autoloader
   ```

### Configurar o SMTP do Titan

Crie `titan-mail-config.php` na pasta da conta **um nível acima de
`public_html`**. Use `backend/titan-mail-config.example.php` como modelo: copie
seu conteúdo para o novo arquivo e substitua a senha de exemplo pela senha de
aplicativo do Titan. O arquivo deve ficar em algo como
`/home/SEU_USUARIO/titan-mail-config.php`, nunca dentro de `public_html`.
Restrinja as permissões do arquivo a `600` ou, se a hospedagem exigir acesso
pelo grupo do servidor web, `640`.

O modelo usa `smtp.titan.email`, porta `587` e TLS. Confirme host, porta,
criptografia e credenciais nos dados de configuração SMTP da sua conta Titan.
Não envie a senha pelo chat nem a inclua no código do site.

Se o Terminal da HostGator não oferecer Composer, execute
`composer install --no-dev --optimize-autoloader` na pasta
`frontend/public/api` antes do build e envie também a pasta `api/vendor` gerada.
O domínio precisa oferecer PHP e permitir conexões de saída ao SMTP do Titan.
