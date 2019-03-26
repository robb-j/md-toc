const fs = require('fs')
const { join } = require('path')

const headTag = `<!-- toc-head -->`
const tailTag = `<!-- toc-tail -->`

function handlify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

function tableOfContents(file, inline = false) {
  try {
    // Load the markdown file
    const path = join(process.cwd(), file)
    const markdown = fs.readFileSync(path).toString('utf8')

    // Create a regex to match headings deeper than 1
    const headingParser = /^.*?(#{2,})(.*)$/gm
    let match = headingParser.exec(markdown)
    const headings = []

    // Loop through, finding each heading match
    while (match) {
      // Extract the hashes and title strings
      let [hashes, title] = match.slice(1)
      title = title.trim()

      // Only process if not our own title
      if (title !== 'Table of Contents') {
        headings.push({
          title,
          level: hashes.length,
          handle: handlify(title)
        })
      }

      // Move to the next heading
      match = headingParser.exec(markdown)
    }

    // Go through each heading and create a list item with a link in it
    const outputLines = ['## Table of Contents', '']
    headings.forEach(({ title, handle, level }) => {
      let item = ''
      while (item.length / 2 < level - 2) item += '  '
      item += `- [${title}](#${handle})`
      outputLines.push(item)
    })

    // Consolodate into a single string, seperated by newlines
    const output = outputLines.join('\n')

    // If in inline mode, replace using the head & tag tags
    if (inline) {
      const replacer = /<!--\s*toc-head\s*-->([\s\S]*)<!--\s*toc-tail\s*-->/
      const toInsert = `${headTag}\n\n${output}\n\n${tailTag}`

      // Stop now & inform the user if the tags weren't found
      if (!markdown.match(replacer)) {
        console.log(`Error: Tags not found in '${file}'`)
        console.log(`place '${headTag}${tailTag}' somewhere in your file`)
        return
      }

      const toWrite = markdown.replace(replacer, toInsert)
      fs.writeFileSync(path, toWrite)
    } else {
      // If not in inline mode, just output the result
      console.log(`\n${output}\n`)
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { tableOfContents, headTag, tailTag }
