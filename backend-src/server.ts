import express, { Request, Response, NextFunction } from 'express';
import apiRoutes, { apiUrl } from './controller';

const port = 3001;
const server = express();

server.use(function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(apiUrl, apiRoutes);

server.listen(port, 'localhost', function () {
  console.log('Node.js express server listening at http://localhost:' + port);
});

export default server;
