import { Injectable } from "@nestjs/common";

@Injectable()
export class SamplesService {
  getHello(): string {
    return "Hello World!";
  }
}
