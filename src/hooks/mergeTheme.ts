import { defu } from 'defu'
import type { Theme } from '~/types'
import { defaults } from '~/defaults'

export function mergeTheme(configTheme: Partial<Theme>, defaultTheme = defaults): Theme {
  const theme = defu(configTheme, defaultTheme)

  return theme
}
