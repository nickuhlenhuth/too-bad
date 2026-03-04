import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import artist from "./sanity/schemas/artist";
import studioInfo from "./sanity/schemas/studioInfo";

export default defineConfig({
  name: "too-bad-tattoo",
  title: "Too Bad Tattoo Studio",
  projectId: "xvdpgu0i",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [artist, studioInfo],
  },
});
