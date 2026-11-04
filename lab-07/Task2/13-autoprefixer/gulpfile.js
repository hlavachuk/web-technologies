// The course used Gulp. This implementation uses the same PostCSS pipeline
// directly so it runs on modern Node.js without Gulp 3.
const fs = require("node:fs/promises");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
async function styles() {
  const css = await fs.readFile("css/styles.css", "utf8");
  const result = await postcss([autoprefixer()]).process(css, { from: "css/styles.css", to: "build/styles.css", map: false });
  await fs.mkdir("build", { recursive: true });
  await fs.writeFile("build/styles.css", result.css);
}
if (require.main === module) styles().catch(error => { console.error(error); process.exitCode = 1; });
exports.styles = styles;
