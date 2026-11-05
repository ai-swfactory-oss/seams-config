import type { Yamllint, YamllintResult } from '../index'

export const createFakeYamllint = (result: YamllintResult = { problems: [] }): Yamllint => ({
  lint: () => result,
})
