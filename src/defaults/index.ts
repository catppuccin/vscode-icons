import { baseIcons } from './baseIcons'
import { fileIcons } from './fileIcons'
import { folderIcons } from './folderIcons'
import { options } from './options'

import type { Theme } from '~/types'

export const defaults: Theme = {
  ...options,
  ...baseIcons,
  fileIcons,
  folderIcons,
}
