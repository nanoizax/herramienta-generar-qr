import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import { Button } from "@/components/ui/button";
import { generateQrDataUrl } from "@/lib/tools/generateQr";
import { trackToolUsage } from "@/lib/hitCounter";

const GenerarQrPage = () => {
  const { t } = useTranslation("tools");

  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setProcessing(true);
    setError(null);
    try {
      const url = await generateQrDataUrl(text.trim(), {
        size: 512,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });
      setQrUrl(url);
      trackToolUsage("generar-qr");
    } catch {
      setError(t("ui.error_generic"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <ToolPageLayout toolId="generar-qr">
      <div className="border border-neutral-800 rounded-xl p-6 md:p-8 space-y-6">
        <div>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setQrUrl(null);
            }}
            placeholder={t("ui.qr_input_placeholder")}
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleGenerate}
            disabled={!text.trim()}
            isLoading={processing}
            loadingText={t("ui.processing")}
            className="bg-white text-black hover:bg-white/80 rounded-full px-8"
          >
            {t("ui.generate_qr_button")}
          </Button>
          {qrUrl && (
            <a href={qrUrl} download="qr.png">
              <Button
                variant="outline"
                className="rounded-full px-8 border-neutral-700 text-white bg-transparent hover:bg-white/10"
              >
                <Download className="w-4 h-4" />
                {t("ui.download_button")}
              </Button>
            </a>
          )}
        </div>

        {qrUrl && (
          <div className="flex justify-center pt-2">
            <img
              src={qrUrl}
              alt="QR"
              className="w-56 h-56 rounded-lg border border-neutral-800 bg-white p-2"
            />
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};

export default GenerarQrPage;
