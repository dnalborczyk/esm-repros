import assert from 'assert'
import { Stream } from 'stream'
import { PassThrough } from 'readable-stream'

assert(new PassThrough() instanceof Stream)
