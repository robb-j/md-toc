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

> You can only use `npx md-toc` when added as a project dependancy

```bash
# Output a table of contents for a README.md in the current directory
npx @robb_j/md-toc

# Insert a table of contents in the local README.md
# -> Replaces inbetween <!-- toc-head --> and <!-- toc-tail -->
npx @robb_j/md-toc -i

# Output a table of contents for a different file
npx @robb_j/md-toc -f CONTRIBUTING.md
```

### Full usage info

```
Usage: @robb_j/md-toc [options]

A tool for generating a table of contents for readmes

Options:
  -V, --version          output the version number
  -f --file [README.md]  specify where the readme file you want to use is (default: "README.md")
  -i --inline [false]    whether to edit the table of contents inline, it replaces for '<!-- toc-head -->' and <!-- toc-tail --> (default: false)
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
