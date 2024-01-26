import { PdfService } from './pdf.service';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    generatePdf(res: any): Promise<void>;
}
