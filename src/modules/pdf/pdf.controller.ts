import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=test.pdf')
  async generatePdf(@Res() res) {
    const buffer = await this.pdfService.generatePfdLib();

    res.set({
      //'Content-Type': 'application/pdf',
      //'Content-Disposition': 'attachment; filename=test.pdf',
      'Content-Length': buffer.length
    });

    res.end(buffer);
  }
}
