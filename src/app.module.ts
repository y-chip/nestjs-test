import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { FilesController } from "./files/files.controller";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./tasks/tasks.service";

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, CatsController, FilesController],
  providers: [AppService, TasksService],
})
export class AppModule {}
