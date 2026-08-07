import type { NextConfig } from "next";
import { withOpencodePreviewSelect } from "./preview-select-next-wrapper.cjs"

const nextConfig: NextConfig = {
  /* config options here */
};

const __opencodePreviewNextConfig = nextConfig;

const __opencodeCosNextConfig = withOpencodePreviewSelect(__opencodePreviewNextConfig) /* previewSelectNextWebpack opencodePreviewNextLocInject */

export default {
  allowedDevOrigins: ["82.157.113.110"], ...__opencodeCosNextConfig, output: 'export' } /* opencode-cos-static-export */