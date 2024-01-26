import { Injectable } from '@nestjs/common';
import * as PDFDocumentKit from 'pdfkit';
import { PDFDocument , StandardFonts, rgb } from 'pdf-lib';

@Injectable()
export class PdfService {
  async generatePfdKit(): Promise<Buffer> {
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocumentKit({
        size: "A4",
        bufferPages: true,
      });

      doc.text("PDF generado con PDFKit");
      doc.moveDown();
      doc.text("Ejemplo de PDF generado en NestJS");

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
          const data = Buffer.concat(buffer);
          resolve(data);
      });

      doc.end();
    });
    
    return pdfBuffer;
  }

  async generatePfdLib() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Add a blank page to the document
    const page = pdfDoc.addPage();

    // Get the width and height of the page
    const { width, height } = page.getSize();

    // Draw a string of text toward the top of the page
    const fontSize = 30;
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;

  }
}
