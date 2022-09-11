import { Controller, Get } from "@nestjs/common";
import { HttpsService } from "./https.service";

@Controller("https")
export class HttpsController {
  constructor(private readonly httpsService: HttpsService) {}

  @Get()
  get() {
    return this.httpsService.get();
  }
}
