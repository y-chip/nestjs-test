import { Controller, Get } from "@nestjs/common";
import { SamplesService } from "./samples.service";

@Controller()
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Get()
  getHello(): string {
    return this.samplesService.getHello();
  }
}
