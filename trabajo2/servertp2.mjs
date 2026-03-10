import http from 'http';
import os from 'os';


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    console.log("RAM libre:", freeMem);

    const totalMemGB = (totalMem / (1024 ** 3)).toFixed(2);
    const freeMemGB = (freeMem / (1024 ** 3)).toFixed(2);
    

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(
    `Memoria RAM total: ${totalMemGB}GB\n` +
    `Memoria RAM libre: ${freeMemGB}GB\n`
  );
});


server.listen(port, hostname, () => {
    console.log(`servidor corriendo en http://${hostname}:${port}/`);
})