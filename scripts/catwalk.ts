import { exec } from 'node:child_process'
import consola from 'consola'

const cmd = [
  'catwalk',
  'assets/previews/latte-icons.png',
  'assets/previews/frappe-icons.png',
  'assets/previews/macchiato-icons.png',
  'assets/previews/mocha-icons.png',
  '-o assets/preview.webp',
  '-l composite',
].join(' ')

consola.info('Runing `catwalk` to generate preview...')

exec(cmd, (err, _out) => {
  if (err)
    consola.error(err)
  else
    consola.success('Successfully built catwalk preview!')
})
