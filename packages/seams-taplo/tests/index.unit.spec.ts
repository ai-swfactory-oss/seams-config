import { describe, expect, it } from 'vitest'

import { createTaplo } from '../src/index'
import { createFakeTaplo } from '../src/testing/index'

describe('createTaplo', () => {
  it('reports no diagnostics while the seam is a skeleton', () => {
    expect(createTaplo().check()).toEqual({ diagnostics: [] })
  })
})

describe('createFakeTaplo', () => {
  it('reports no diagnostics by default', () => {
    expect(createFakeTaplo().check()).toEqual({ diagnostics: [] })
  })

  it('returns the result it was given', () => {
    const result = {
      diagnostics: [{ path: 'Cargo.toml', line: 3, column: 7, message: 'expected a value' }],
    }
    expect(createFakeTaplo(result).check()).toBe(result)
  })
})
