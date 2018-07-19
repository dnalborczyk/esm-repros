;(async () => {
  const __filePath = './templates/some.file'

  const params = new URLSearchParams()

  params.append('__filePath', __filePath)

  const filePath = new URL('./foo.mjs', import.meta.url)

  filePath.search = params

  await import(filePath)
})()
