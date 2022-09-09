import { Module } from "@nestjs/common";
import { SamplesController } from "./samples/samples.controller";
import { SamplesService } from "./samples/samples.service";
import { CatsController } from "./cats/cats.controller";
import { FilesController } from "./files/files.controller";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./tasks/tasks.service";

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [SamplesController, CatsController, FilesController],
  providers: [SamplesService, TasksService],
})
export class AppModule {}
