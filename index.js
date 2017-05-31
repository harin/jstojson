#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]
if (filePath == null) {
  console.error('[ERROR] please provide a path to the js file as the first argument')
  process.exit(1)
}

try {
  const str = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
  const js = eval(str)
  const result = JSON.stringify(js, null, 2)
  console.log(result)
} catch (err) {
  console.error('[ERROR] ', err)
  process.exit(1)
}

