export interface KustomizeBuildResult {
  readonly manifests: string
}

export interface Kustomize {
  readonly build: () => KustomizeBuildResult
}

export const createKustomize = (): Kustomize => ({
  build: () => ({ manifests: '' }),
})
