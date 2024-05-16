const webScokectURL = "wss://a8r.evo-games.com/public/baccarat/player/game/o4kylkahpwqqy57w/socket?messageFormat=json&instance=nili6x-r5xlzancmx5ffcl7-qfg5qzdjx7pinrpp&tableConfig=qfg5qzdjx7pinrpp&EVOSESSIONID=r5xlzancmx5ffcl7r57lajrun43ac6lkec1828490b1c30711eca5d08704171a8970c8ea0875b4ca7&client_version=6.20240514.70234.41651-9c917fdf36"

const WebSocket = require('ws');

// Substitua pela URL do seu WebSocket
const wsUrl = 'wss://example.com/socket';

const ws = new WebSocket(webScokectURL);

ws.on('open', function open() {
  console.log('Conectado ao WebSocket');
});

ws.on('message', function incoming(data) {
  try {
    const message = JSON.parse(data);
    
    // Verifica se a mensagem possui os campos desejados
    if (message.args && message.args.gameData) {
      const playerHand = message.args.gameData.playerHand;
      const bankerHand = message.args.gameData.bankerHand;

      // Verifica se playerHand e bankerHand estão presentes
      if (playerHand && bankerHand) {
        console.log('Player Hand:', JSON.stringify(playerHand, null, 2));
        console.log('Banker Hand:', JSON.stringify(bankerHand, null, 2));
      } else {
        console.log('playerHand ou bankerHand não encontrados na mensagem');
      }
    } else {
      //console.log('gameData não encontrado na mensagem');
    }
  } catch (e) {
    console.error('Erro ao analisar a mensagem:', e);
  }
});

ws.on('error', function error(err) {
  console.error('Erro:', err.message);
});

ws.on('close', function close() {
  console.log('Conexão fechada');
});


