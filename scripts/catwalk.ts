import { exec } from 'child_process'

const cmd = [
  'catwalk',
  'assets/previews/latte-icons.png',
  'assets/previews/frappe-icons.png',
  'assets/previews/macchiato-icons.png',
  'assets/previews/mocha-icons.png',
  '-o assets/preview.webp',
  '-l composite',
].join(' ')

exec(cmd, (err, out) => {
  if (err)
    console.error(err)
  else
    console.log(out)
})
