import http from 'http';
import { stats } from './pcRamUsage';

const port = 3000;

http.createServer((req, res) => {
    const url = req.url;
    if (url === "/stats") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Working</h1>");
        res.end();
    }
}).listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);
