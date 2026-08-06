import type { NextConfig } from "next";
import { withOpencodePreviewSelect } from "./preview-select-next-wrapper.cjs"

const nextConfig: NextConfig = {
  /* config options here */
};

const __opencodePreviewNextConfig = nextConfig;

const __opencodeCosNextConfig = withOpencodePreviewSelect(__opencodePreviewNextConfig) /* previewSelectNextWebpack opencodePreviewNextLocInject */

export default { ...__opencodeCosNextConfig, output: 'export' } /* opencode-cos-static-export */
