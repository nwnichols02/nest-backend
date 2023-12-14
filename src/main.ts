import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const { httpAdapter } = app.get(HttpAdapterHost) 
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  app.useLogger(app.get(MyLoggerService));
  app.enableCors();
  app.setGlobalPrefix('api');
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
