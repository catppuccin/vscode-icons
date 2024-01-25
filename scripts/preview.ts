import { readdir, writeFile } from 'node:fs/promises'
import { temporaryFileTask } from 'tempy'

const allIcons = await readdir('icons/latte')
const fileIcons = allIcons.filter(i => !i.startsWith('folder_'))
const folderIcons = allIcons.filter(i => i.startsWith('folder_') && !i.endsWith('_open.svg'))
const icons = fileIcons.toSorted(() => 0.5 - Math.random())

const html = `
  <html>
    <head>
      <style>
        .icon {
          width: 32px;
          height: 32px;
        }
        .grid {
          width: 200%;
          display: inline-flex;
          flex-wrap: wrap;
          gap: 3px;
        }
      </style>
    </head>
    <body>
    <div class="grid">
        ${Array(5).fill(icons).flat().map(i => `<img class="icon" src="./icons/latte/${i}">`).join('')}
      </div>
    </body>
  </html>
`

await writeFile('preview.html', html)
