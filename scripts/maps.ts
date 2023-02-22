export const flattenIconMap = (map: IconMap) => Object.entries(map).reduce(
  (acc, [icon, ids]) => ({
    ...acc,
    ...ids.reduce((a, id) => ({ ...a, [id]: icon }), {}),
  }),
  {},
)
