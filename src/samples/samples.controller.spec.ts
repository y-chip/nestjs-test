import { Test, TestingModule } from "@nestjs/testing";
import { SamplesController } from "./samples.controller";
import { SamplesService } from "./samples.service";

describe("AppController", () => {
  let samplesController: SamplesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SamplesController],
      providers: [SamplesService],
    }).compile();

    samplesController = app.get<SamplesController>(SamplesController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(samplesController.getHello()).toBe("Hello World!");
    });
  });
});
