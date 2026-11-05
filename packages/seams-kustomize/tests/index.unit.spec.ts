import { describe, expect, it } from 'vitest'

import { createKustomize } from '../src/index'
import { createFakeKustomize } from '../src/testing/index'

describe('createKustomize', () => {
  it('builds no manifests while the seam is a skeleton', () => {
    expect(createKustomize().build()).toEqual({ manifests: '' })
  })
})

describe('createFakeKustomize', () => {
  it('builds no manifests by default', () => {
    expect(createFakeKustomize().build()).toEqual({ manifests: '' })
  })

  it('returns the result it was given', () => {
    const result = { manifests: 'apiVersion: v1\nkind: ConfigMap\n' }
    expect(createFakeKustomize(result).build()).toBe(result)
  })
})
