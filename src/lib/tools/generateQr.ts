import QRCode from "qrcode";

export interface QrOptions {
  size: number;
  colorDark: string;
  colorLight: string;
}

export async function generateQrDataUrl(text: string, options: QrOptions): Promise<string> {
  return QRCode.toDataURL(text, {
    width: options.size,
    margin: 2,
    color: { dark: options.colorDark, light: options.colorLight },
    errorCorrectionLevel: "M",
  });
}
