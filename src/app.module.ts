import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { FilesController } from "./files/files.controller";

@Module({
  imports: [],
  controllers: [AppController, CatsController, FilesController],
  providers: [AppService],
})
export class AppModule {}
