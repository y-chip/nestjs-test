import { Test, TestingModule } from "@nestjs/testing";
import { ExcelsController } from "./excels.controller";

describe("ExcelsController", () => {
  let controller: ExcelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcelsController],
    }).compile();

    controller = module.get<ExcelsController>(ExcelsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
