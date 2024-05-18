const webScokectURL = "wss://a8r.evo-games.com/public/baccarat/player/game/o4kylkahpwqqy57w/socket?messageFormat=json&instance=3wsyyu-r5xlzancmx5ffcl7-qfg5qzdjx7pinrpp&tableConfig=qfg5qzdjx7pinrpp&EVOSESSIONID=r5xlzancmx5ffcl7r6gsacvwn43px65sfd30f4a19ea780b0722d8c35cfa7c8aafd1f5bfc20231c42&client_version=6.20240516.72337.41698-8d94a605b7"

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


