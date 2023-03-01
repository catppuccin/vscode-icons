import { cssVars } from '@/palettes'

export function replaceFlavour(svg: string, palette: keyof typeof cssVars) {
  return svg.replace(/\{[\s\S]*\}/, cssVars[palette])
}
