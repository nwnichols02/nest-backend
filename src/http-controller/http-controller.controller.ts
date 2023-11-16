import { Controller, Get } from '@nestjs/common';

@Controller('http-controller')
export default class HttpController {
  @Get()
  getRandomStrings(): string[] {
    const strings = Array.from({ length: 10 }, () =>
      this.generateRandomString(10),
    );
    return strings;
  }

  private generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
