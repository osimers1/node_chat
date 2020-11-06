const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req , res) =>{
    res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
    console.log('utilisateur connecter');

    socket.on('disconnect', () => {
        console.log('utilisateur deconnecter');
    })

    //ecoute l'evenement message, socket qui recupere l'ecoute 
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})



//ecoute le port 3000 et ecris dans la console
server.listen(3000, () => {
    console.log('server en cour sur le port 3000');
})