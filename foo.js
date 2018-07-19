import assert from 'assert'
import { URL } from 'url'

const { searchParams } = new URL(import.meta.url)

const __filePath = searchParams.get('__filePath')

assert(__filePath === './templates/some.file')
