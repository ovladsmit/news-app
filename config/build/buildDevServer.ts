import { Configuration } from "webpack-dev-server";
import { BuildOption } from "./types/config";

export function buildDevServer(option:BuildOption): Configuration{
  return{
    port: option.port,
    open: true,
    historyApiFallback: true
  }
}