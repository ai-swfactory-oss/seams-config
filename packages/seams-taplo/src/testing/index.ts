import type { Taplo, TaploCheckResult } from '../index'

export const createFakeTaplo = (result: TaploCheckResult = { diagnostics: [] }): Taplo => ({
  check: () => result,
})
