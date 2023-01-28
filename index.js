const { Client, LocalAuth, LegacySessionAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const { validateInput } = require('./handler')
const { CheckIn, CheckOut } = require('./main')


const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: __dirname
    });
  });

  const client = new Client({
    restartOnAuthFail: true,
    ignoreHTTPSErrors: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ],
    },
    authStrategy: new LocalAuth({ clientId: "bot" })
  });

client.on('message', async message => {
    if(message.body === '!ping') {
		message.reply('_[Bot is Online]_ \nType *!help* to view command list.');
	}
    if(message.body.split('#')[0] === '!checkin') {
        // !checkin#Andra#ODP#MII#3#1
        inputName = message.body.split('#')[1]
        inputFungsi = message.body.split('#')[2]
        inputVendor = message.body.split('#')[3]
        inputLokasi = message.body.split('#')[4]
        inputJam = message.body.split('#')[5]

        isValid = await validateInput(inputFungsi, inputLokasi, inputJam)
        console.log(isValid);

        if (isValid == true){
            doCheckIn = await CheckIn(inputName, inputFungsi, inputVendor, inputLokasi, inputJam)
            client.sendMessage(message.from, doCheckIn)
        } else {
            client.sendMessage(message.from, isValid)
        }
    }
})

client.initialize();

// Socket IO
io.on('connection', function(socket) {
    socket.emit('message', 'Connecting...');
  
    client.on('qr', (qr) => {
      console.log('QR RECEIVED', qr);
      qrcode.toDataURL(qr, (err, url) => {
        socket.emit('qr', url);
        socket.emit('message', 'QR Code received, scan please!');
      });
    });
  
    client.on('ready', () => {
      socket.emit('ready', 'Whatsapp is ready!');
      socket.emit('message', 'Whatsapp is ready!');
    });
  
    client.on('authenticated', () => {
      socket.emit('authenticated', 'Whatsapp is authenticated!');
      socket.emit('message', 'Whatsapp is authenticated!');
      console.log('AUTHENTICATED');
    });
  
    client.on('auth_failure', function(session) {
      socket.emit('message', 'Auth failure, restarting...');
    });
  
    client.on('disconnected', (reason) => {
      socket.emit('message', 'Whatsapp is disconnected!');
      client.destroy();
      client.initialize();
    });
  });

  server.listen(port, function() {
    console.log('App running on *: ' + port);
  });