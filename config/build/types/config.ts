export type BuildMode = 'production' | 'development' // Режимы сборки

export interface BuildPaths {//Пути до входа в проект, в папку со сборкой, до файлика html
  entry: string;
  build: string;
  html: string;
}
export interface BuildEnv {
  mode:BuildMode;
  port: number;
}
export interface BuildOption {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number
}