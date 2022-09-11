import { Test, TestingModule } from "@nestjs/testing";
import { HttpsController } from "./https.controller";

describe("HttpsController", () => {
  let controller: HttpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpsController],
    }).compile();

    controller = module.get<HttpsController>(HttpsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
