import { Injectable } from "@nestjs/common";

const ExcelJS = require("exceljs");

@Injectable()
export class ExcelsService {
  async read(file: Express.Multer.File) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file.path);

    const worksheet = workbook.getWorksheet("Sheet1");

    console.log(worksheet.getRow(1).getCell(1).value);
    console.log(worksheet.getRow(2).getCell(1).value);
    console.log(worksheet.getRow(3).getCell(1).value);
    console.log(worksheet.getRow(4).getCell(1).value);
  }
}
