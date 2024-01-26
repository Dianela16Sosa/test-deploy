"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const PDFDocumentKit = require("pdfkit");
const pdf_lib_1 = require("pdf-lib");
let PdfService = class PdfService {
    async generatePfdKit() {
        const pdfBuffer = await new Promise((resolve) => {
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
        const pdfDoc = await pdf_lib_1.PDFDocument.create();
        const timesRomanFont = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRoman);
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        const fontSize = 30;
        page.drawText('Creating PDFs in JavaScript is awesome!', {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: timesRomanFont,
            color: (0, pdf_lib_1.rgb)(0, 0.53, 0.71),
        });
        const pdfBytes = await pdfDoc.save();
        return pdfBytes;
    }
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)()
], PdfService);
//# sourceMappingURL=pdf.service.js.map