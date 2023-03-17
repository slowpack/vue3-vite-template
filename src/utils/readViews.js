export const readViewsDir = (modules) => {
  const parentFiles = []
  for (const path in modules) {
    if (Object.hasOwnProperty.call(modules, path)) {
      const parentPath = path.replace('/index.vue', '').split('/').pop()
      if (!parentFiles.includes(parentPath)) {
        parentFiles.push(parentPath)
      }
    }
  }
  return parentFiles
}

