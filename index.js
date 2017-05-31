#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]
if (filePath == null) {
  console.error('[ERROR] please provide a path to the js file as the first argument')
  process.exit(1)
}

try {
  const baseName = path.basename(filePath)
  const content = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
  const js = eval(content)
  const json = JSON.stringify(js, null, 2)
  const resultName = baseName.replace(/\.js$/, '.json')
  const writePath = filePath.replace(baseName, resultName)
  fs.writeFileSync(writePath, json)
} catch (err) {
  console.error('[ERROR] ', err)
  process.exit(1)
}

