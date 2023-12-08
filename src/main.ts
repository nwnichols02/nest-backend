import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ws from 'ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  // const server = new ws.Server({ port: 3002 });

  // server.on('connection', (socket) => {
  //   socket.on('message', (msg) => {
  //     console.log('message from client: ' + msg);
  //     socket.send('Hello from server');
  //   });
  // });
}
bootstrap();
