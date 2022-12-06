/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import '../scripts/views/template/header';
import '../scripts/views/template/footer';
import App from './views/app';
import { WebSocketInitiator } from './utils/websocket.init';
import CONFIG from './globals/config';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
