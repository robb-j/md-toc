# Markdown Table of Contents Generator

Quickly generate a table of contents from a markdown file and optionally insert it inline.

## Table of Contents

- [Usage](#usage)
  - [Installation](#installation)
  - [Example use](#example-use)
  - [Full usage info](#full-usage-info)
- [Dependancies](#dependancies)
- [API](#api)

## Usage

### Installation

```bash
# Install on a project as a dev dependancy
npm i -D @robb_j/md-toc
```

### Example use

```bash
# Output a table of contents for a README.md in the current directory
npx md-toc

# Insert a table of contents in the local README.md
# -> Replaces inbetween <!-- toc-head --> and <!-- toc-tail -->
npx md-toc -i

# Output a table of contents for a different file
npx md-toc -f CONTRIBUTING.md
```

### Full usage info

```
Usage: md-toc [options]

A tool for generating a table of contents for readmes

Options:
  -V, --version          output the version number
  -f --file [README.md]  specify where the readme file you want to use is (default: "README.md")
  -i --inline [false]    whether to edit the table of contents inline, it replaces for '<!-- toc-head -->' and <!-- toc-tail --> (default: false)
  -h, --help             output usage information
```

## Dependancies

This module only has 2 dependancies, [casex](https://npm.im/casex) & [commander](https://npm.im/commander),
as of writing neither of which have any nested dependancies.

## API

You can use this programmatically in node by importing the module,
see [cli.js](/src/cli.js) for detailed usage.

```js
const { tableOfContents, headTag, tailTag } = require('@robb_j/md-toc')

// filename: string
// inline: boolean
tableOfContents(filename, inline)
```
