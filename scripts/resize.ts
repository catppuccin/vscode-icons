export function changeViewbox(svg: string, viewBox: string) {
  return svg.replace(/viewBox="[0-9 ]*"/, `viewBox="${viewBox}"`)
}
