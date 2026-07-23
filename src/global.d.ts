/*
Это файл объявления типов (declaration file, .d.ts) — он нужен для того, чтобы TypeScript
не ругался при импорте CSS/SCSS-файлов в коде.
В чём проблема без этого файла
TypeScript по своей природе понимает только .ts/.tsx/.js-файлы.
 */

declare module "*.module.css";
declare module "*.module.scss";
declare module "*.scss";
declare module "*.css";