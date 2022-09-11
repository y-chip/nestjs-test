import { Test, TestingModule } from "@nestjs/testing";
import { HttpsService } from "./https.service";

describe("HttpsService", () => {
  let service: HttpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpsService],
    }).compile();

    service = module.get<HttpsService>(HttpsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
