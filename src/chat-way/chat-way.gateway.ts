import { Logger } from "@nestjs/common";
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";

import { Server } from "socket.io";

@WebSocketGateway(8001, { cors: "*:*" })
export class ChatWayGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatWayGateway.name);

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log("Initialized");
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage("message")
  handleMessage(@MessageBody() message: string, client: any, data: any): void {
    // this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${message}`);
    console.log(message)

    this.io.emit("message", message);
    // return {
    //   event: "pong",
    //   data: "Wrong data that will make the test fail",
    // };
  }
}