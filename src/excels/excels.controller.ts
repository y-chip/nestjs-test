import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("excels")
export class ExcelsController {
  @Post("upload")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
