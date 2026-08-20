
import { TextEncoder, TextDecoder } from 'node:util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
import '@testing-library/jest-dom'
import './i18nForTests'