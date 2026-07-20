/**
 * Populate screens: copy raw_screens/*.png → files/{name}.png
 * with correct theme names from package.json contributes.themes.
 *
 * Usage: node src/e2e-screenshots/populate-screens.js
 */

const { readdirSync, copyFileSync, existsSync, mkdirSync } = require('fs')
const { resolve } = require('node:path')

const ROOT = resolve(__dirname, '../..')
const FILES_DIR = resolve(ROOT, 'files')
const RAW_SCREENS_DIR = resolve(FILES_DIR, 'raw_screens')
const PACKAGE_JSON = resolve(ROOT, 'package.json')

/**
 * Convert PascalCase to dot.case (e.g., "CommunicationBreakdown" → "communication.breakdown")
 */
function dotCase(str) {
  return str
    .replace(/([A-Z])/g, '.$1')
    .replace(/^\./, '')
    .toLowerCase()
}

function main() {
  const pkg = require(PACKAGE_JSON)
  const themes = pkg.contributes?.themes

  if (!themes || themes.length === 0) {
    console.error('No themes found in package.json contributes.themes')
    process.exit(1)
  }

  const themeNames = themes.map(({ label }) => dotCase(label))
  themeNames.sort()

  if (!existsSync(RAW_SCREENS_DIR)) {
    console.error(`Raw screens directory not found: ${RAW_SCREENS_DIR}`)
    console.error('Run "yarn screenshots" first')
    process.exit(1)
  }

  const rawFiles = readdirSync(RAW_SCREENS_DIR)
    .filter(f => f.endsWith('.png'))
    .sort()

  if (rawFiles.length === 0) {
    console.error('No PNG files found in raw_screens/')
    process.exit(1)
  }

  if (!existsSync(FILES_DIR)) {
    mkdirSync(FILES_DIR, { recursive: true })
  }

  rawFiles.forEach((rawFile, i) => {
    const sourcePath = resolve(RAW_SCREENS_DIR, rawFile)
    const destName = themeNames[i]
    if (!destName) {
      console.warn(`  Skipping ${rawFile}: no matching theme`)
      return
    }
    const destPath = resolve(FILES_DIR, `${destName}.png`)
    copyFileSync(sourcePath, destPath)
    console.log(`  ${rawFile} → ${destName}.png`)
  })

  console.log(`\nCopied ${Math.min(rawFiles.length, themeNames.length)} screenshots`)
}

main()
