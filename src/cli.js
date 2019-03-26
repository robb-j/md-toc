#!/usr/bin/env node

const program = require('commander')
const glob = require('glob')
const packageJson = require('../package.json')
const { tableOfContents, headTag, tailTag } = require('./index')

// Make sure we ignore the node_modules folder
const globOptions = {
  ignore: ['**/node_modules/**']
}

program
  .version(packageJson.version)
  .name(packageJson.name)
  .description('A tool for generating a table of contents for markdown files')
  .option(
    '-f --file [README.md]',
    'specify where the markdown file(s) you want to process are, accepts a filename or a glob',
    'README.md'
  )
  .option(
    '-i --inline [false]',
    `edit the table of contents inline, it replaces inbetween '${headTag}' and ${tailTag}`,
    false
  )
  .option(
    '--dry-run [false]',
    'perform a dry run, useful for testing your glob'
  )
  .action(args => {
    glob(args.file, globOptions, (error, files) => {
      if (error) {
        //
        // 1. If there was any error, log them and stop
        //
        console.log(`Matching failed for '${args.file}'`)
        console.log(error.message)
      } else if (args.dryRun) {
        //
        // 2. If in dry-run mode, just list what the glob matched
        //
        console.log(`Matched ${files.length} file(s)`)
        for (let file of files) {
          console.log(' -', file)
        }
      } else {
        //
        // 3. Perform the table of contents generation
        //
        for (let file of files) {
          if (!args.inline) console.log(`${file}:`)
          tableOfContents(file, args.inline)
          if (!args.inline) console.log()
        }
      }
    })
  })

program.parse(process.argv)
