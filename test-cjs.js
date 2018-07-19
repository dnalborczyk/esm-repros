const assert = require('assert')
const { Stream } = require('stream')
const { PassThrough } = require('readable-stream')

assert(new PassThrough() instanceof Stream)
