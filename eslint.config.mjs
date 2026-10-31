import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// Next.js 16 removed `next lint`, so linting runs through the ESLint CLI.
// eslint-config-next@16 exports flat config arrays directly.
const config = [...coreWebVitals, ...typescript];

export default config;
