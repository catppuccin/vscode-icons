import { defu } from 'defu'
import type { Theme } from '~/types'
import { defaults } from '~/defaults'

export function mergeTheme(configTheme: Partial<Theme>): Theme {
  const theme = defu(configTheme, defaults)

  return theme
}
