import { Module } from "@nestjs/common";
import { SamplesController } from "./samples/samples.controller";
import { SamplesService } from "./samples/samples.service";
import { CatsController } from "./cats/cats.controller";
import { FilesController } from "./files/files.controller";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./tasks/tasks.service";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ExcelsService } from "./excels/excels.service";
import { ExcelsController } from "./excels/excels.controller";
import * as dayjs from "dayjs";
import { HttpModule } from "@nestjs/axios";
import { HttpsService } from "./https/https.service";
import { HttpsController } from "./https/https.controller";

const crypto = require("crypto");
const fs = require("fs");

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, callback) => {
          const identifier =
            dayjs().format("YYYYMMDD_HHmmss") + "_" + crypto.randomUUID();
          const directory = `./resource/upload/${identifier}`;

          fs.mkdirSync(directory, { recursive: true });

          callback(null, directory);
        },
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
    HttpModule,
  ],
  controllers: [
    SamplesController,
    CatsController,
    FilesController,
    ExcelsController,
    HttpsController,
  ],
  providers: [SamplesService, TasksService, ExcelsService, HttpsService],
})
export class AppModule {}
