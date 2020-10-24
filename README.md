# Markdown Table of Contents Generator

Quickly generate a table of contents from a markdown file and optionally insert it inline.

## Table of Contents

- [Usage](#usage)
  - [Installation](#installation)
  - [Example use](#example-use)
  - [Full usage info](#full-usage-info)
- [API](#api)

## Usage

### Installation

```bash
# Install on a project as a dev dependancy
npm i -D @robb_j/md-toc
```

### Example use

> You can use `npx md-toc` when added as a project dependancy

```bash
# Output a table of contents for a README.md in the current directory
npx @robb_j/md-toc

# Insert a table of contents in the local README.md
# -> Replaces inbetween <!-- toc-head --> and <!-- toc-tail -->
npx @robb_j/md-toc -i

# Output a table of contents for a different file
npx @robb_j/md-toc -f CONTRIBUTING.md

# Use a glob to process multiple files
npx @robb_j/md-toc -f "**/*.md"

# Test a glob to see what it matches
npx @robb_j/md-toc -f "**/*.md" --dry-run
```

### Full usage info

```
Usage: @robb_j/md-toc [options]

A tool for generating a table of contents for readmes

Options:
  -V, --version          output the version number
  -f --file [README.md]  specify where the markdown file(s) you want to process are, accepts a filename or a glob (default: "README.md")
  -i --inline [false]    edit the table of contents inline, it replaces between '<!-- toc-head -->' and <!-- toc-tail --> (default: false)
  --dry-run [false]      perform a dry run, useful for testing your glob
  -h, --help             output usage information
```

## API

You can use this programmatically in node by importing the module,
see [cli.js](/src/cli.js) for detailed usage.

```js
const { tableOfContents, headTag, tailTag } = require('@robb_j/md-toc')

// filename: string
// inline: boolean
tableOfContents(filename, inline)
```

### Development

```bash
# Run the cli when you have the repo checked out
# NOTE: Make sure not to process this readme as it has toc-head/tail comments in for documentation only
node src/cli.js # ...
```

## Future work

- Take file pattern as an argument rather than an option, i.e. `md-toc <...pattern>`, perhaps as a varadic argument

---

> This repo was set up with [robb-j/node-base](https://github.com/robb-j/node-base)
