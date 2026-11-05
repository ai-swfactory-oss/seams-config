import { describe, expect, it } from 'vitest'

import { createYamllint } from '../src/index'
import { createFakeYamllint } from '../src/testing/index'

describe('createYamllint', () => {
  it('reports no problems while the seam is a skeleton', () => {
    expect(createYamllint().lint()).toEqual({ problems: [] })
  })
})

describe('createFakeYamllint', () => {
  it('reports no problems by default', () => {
    expect(createFakeYamllint().lint()).toEqual({ problems: [] })
  })

  it('returns the result it was given', () => {
    const result = {
      problems: [
        {
          path: 'config.yaml',
          line: 1,
          column: 1,
          level: 'warning' as const,
          rule: 'document-start',
          message: 'missing document start "---"',
        },
      ],
    }
    expect(createFakeYamllint(result).lint()).toBe(result)
  })
})
