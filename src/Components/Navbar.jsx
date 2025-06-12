
import {
  Compress,
  Merge,
  PdfToWord,
  Split,
  PdfToPowerpoint,
  PdfToExcel,
  WordToPdf,
  PdfToJPG,
  PdfToPdfA,
  PageNumbers,
  ComparePdf,
  RedactPdf,
  CropPdf,
  RepairPDf,
  PowerPointToPdf,
  ExcelToPdf,
  EditPdf,
  JpgToPdf,
  SingPdf,
  Watermark,
  HtmlToPdf,
  UnlockPdf,
  ProtectPdf,
  OrganizePdf,
  ScanToPdf,
  OcrPdf,
  RotatePdf,
  PremiumPic,
} from "../assets/svgassets.jsx";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between ">
       <div className="flex gap-2 items-center">
         <h1 className="font-extrabold text-3xl">i love pdf</h1>
        <div className="flex gap-2">
          <p>Merge pdf</p>
          <p>Merge pdf</p>
          <p>Merge pdf</p>


        </div>
       </div>
       <div className="flex gap-2">
        <p>Merge pdf</p>
          <p>Merge pdf</p>
          <p>Merge pdf</p>


      </div>

      </div>
      
    </div>
  )
}

export default Navbar