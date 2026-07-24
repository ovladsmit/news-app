import { ResolveOptions } from "webpack";
import { BuildOption } from "./types/config";

export function buildResolvers(option: BuildOption): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [option.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}