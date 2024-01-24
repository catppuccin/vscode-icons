import { temporaryFileTask } from 'tempy'

(async () => {
  temporaryFileTask(() => {
    console.log('hi')
  })

  // console.log(f)
})()
