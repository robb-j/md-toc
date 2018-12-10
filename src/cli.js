#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../package.json')
const { tableOfContents, headTag, tailTag } = require('./index')

program
  .version(packageJson.version)
  .name(packageJson.name)
  .description('A tool for generating a table of contents for readmes')
  .option(
    '-f --file [README.md]',
    'specify where the readme file you want to use is',
    'README.md'
  )
  .option(
    '-i --inline [false]',
    `whether to edit the table of contents inline, it replaces for '${headTag}' and ${tailTag}`,
    false
  )
  .action(args => {
    tableOfContents(args.file, args.inline)
  })

program.parse(process.argv)
