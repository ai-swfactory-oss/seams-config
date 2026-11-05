export interface YamllintProblem {
  readonly path: string
  readonly line: number
  readonly column: number
  readonly level: 'error' | 'warning'
  readonly rule: string
  readonly message: string
}

export interface YamllintResult {
  readonly problems: readonly YamllintProblem[]
}

export interface Yamllint {
  readonly lint: () => YamllintResult
}

export const createYamllint = (): Yamllint => ({
  lint: () => ({ problems: [] }),
})
