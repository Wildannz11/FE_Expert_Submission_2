import NotificationHelper from './notif-helper';

let sc = null;
const WebSocketInitiator = {
  init(url) {
    sc = new WebSocket(url);
    console.log(`websocket connect to ${sc.url}`);
    sc.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name}`,
      options: {
        body: restaurant.overview,
      },
    });
  },
};

const sendDatatoWebSocket = (data) => {
  const datarest = JSON.stringify(data);
  sc.send(datarest);
  console.log('Succes send data to websocket');
};

export { sendDatatoWebSocket, WebSocketInitiator };
