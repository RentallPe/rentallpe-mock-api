const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// si quieres simular delay:
// server.use((req, res, next) => setTimeout(next, 300));

server.use(router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log('JSON Server running on port', port);
});
