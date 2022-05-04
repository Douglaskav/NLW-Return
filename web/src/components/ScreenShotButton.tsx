import { useState } from "react";
import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";

interface ScreenShotButtonProps {
  onScreenshotTook: (screenshot: string) => void
}

export function ScreenShotButton({ onScreenshotTook }: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    console.log(base64image);

    onScreenshotTook(base64image);
    setIsTakingScreenShot(false);
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
    </button>
  );
}
