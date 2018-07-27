import { expect } from 'code'
import Lab from 'lab'

const lab = Lab.script()
const { describe, it } = lab

import Stream from 'stream'
import { Stream as __Stream } from '../src'

it('...', () => {
  //
  expect(Stream === __Stream).to.be.true()
})

export { lab }
