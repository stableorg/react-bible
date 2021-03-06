const fs = require('fs')
const path = require('path')

const compress = (bible) =>
  bible.map(book =>
    book.map(chapter =>
      chapter.map(({ n, txt }) =>
        `${n}|${txt}`
      ).join('')
    ).join('||')
  ).join('|||')

let kjv = fs.readFileSync(path.join(
  __dirname,
  'docs',
  'version',
  'cuv.json'
), 'utf8')
kjv = JSON.parse(kjv)
kjv = compress(kjv)
console.log(kjv)
fs.writeFileSync(path.join(
  __dirname,
  'docs',
  'version',
  'cuv.flat'
), kjv, 'utf8')
