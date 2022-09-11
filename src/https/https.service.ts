import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class HttpsService {
  constructor(private readonly httpService: HttpService) {}

  get() {
    this.httpService
      .get("https://httpbin.org/get")
      .subscribe((value) => console.log(value.data));
  }
}
