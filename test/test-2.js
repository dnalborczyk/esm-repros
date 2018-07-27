const { expect } = require('code')
const Lab = require('lab')

const { describe, it } = (exports.lab = Lab.script())

const Stream = require('stream') // <---- COMMENT OUT THIS LINE TO MAKE IT FAIL
const something = require('../')

it('...', () => {
  //
})
