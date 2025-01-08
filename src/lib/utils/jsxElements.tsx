import SolarDocumentBold from "~icons/solar/document-bold.jsx";
import MynauiImageSolid from "~icons/mynaui/image-solid.jsx";
import LetsIconsFileFill from "~icons/lets-icons/file-fill.jsx";
import DashiconsFormatAudio from "~icons/dashicons/format-audio.jsx";
import RaphaelVideo from "~icons/raphael/video.jsx";

export const getFileIcon = (contentType: string) => {
  const variant = contentType.toLowerCase();
  return variant.startsWith("images") ? (
    <MynauiImageSolid />
  ) : variant.startsWith("documents") ? (
    <SolarDocumentBold />
  ) : variant.startsWith("videos") ? (
    <RaphaelVideo />
  ) : variant.startsWith("audio") ? (
    <DashiconsFormatAudio />
  ) : (
    <LetsIconsFileFill />
  );
};
