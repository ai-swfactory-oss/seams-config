export interface TaploDiagnostic {
  readonly path: string
  readonly line: number
  readonly column: number
  readonly message: string
}

export interface TaploCheckResult {
  readonly diagnostics: readonly TaploDiagnostic[]
}

export interface Taplo {
  readonly check: () => TaploCheckResult
}

export const createTaplo = (): Taplo => ({
  check: () => ({ diagnostics: [] }),
})
