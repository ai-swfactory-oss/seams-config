import type { Kustomize, KustomizeBuildResult } from '../index'

export const createFakeKustomize = (result: KustomizeBuildResult = { manifests: '' }): Kustomize => ({
  build: () => result,
})
