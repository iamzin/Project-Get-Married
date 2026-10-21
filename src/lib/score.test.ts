import { describe, expect, it } from 'vitest'
import { questions } from '../data/questions'
import { results } from '../data/results'
import {
  maxScore,
  parseCurrentAge,
  parseShareParams,
  predictedAge,
  resultForScore,
  totalScore,
  yearsUntilMarriage,
} from './score'

describe('questions data', () => {
  it('has 15 questions with 3 choices each', () => {
    expect(questions).toHaveLength(15)
    for (const q of questions) expect(q.choices).toHaveLength(3)
  })
})

describe('totalScore', () => {
  it('sums the chosen scores', () => {
    const allFirst = questions.map(() => 0)
    expect(totalScore(allFirst)).toBe(questions.reduce((s, q) => s + q.choices[0].score, 0))
  })
})

describe('yearsUntilMarriage', () => {
  it('ranges from 1 year (min score) to 12 years (max score)', () => {
    expect(yearsUntilMarriage(0)).toBe(1)
    expect(yearsUntilMarriage(maxScore)).toBe(12)
  })
  it('never decreases as score increases', () => {
    let prev = 0
    for (let s = 0; s <= maxScore; s++) {
      const y = yearsUntilMarriage(s)
      expect(y).toBeGreaterThanOrEqual(prev)
      prev = y
    }
  })
  it('stays inside the 2-year window of the matching result type', () => {
    for (let s = 0; s <= maxScore; s++) {
      const idx = results.indexOf(resultForScore(s))
      const y = yearsUntilMarriage(s)
      expect(y, `score ${s}`).toBeGreaterThanOrEqual(2 * idx + 1)
      expect(y, `score ${s}`).toBeLessThanOrEqual(2 * idx + 2)
    }
  })
})

describe('predictedAge', () => {
  it('is always later than the current age', () => {
    for (const age of [18, 25, 35, 45, 60]) {
      expect(predictedAge(age, 0)).toBe(age + 1)
      expect(predictedAge(age, maxScore)).toBe(age + 12)
    }
  })
})

describe('resultForScore', () => {
  it('maps min score to the first type and max score to the last', () => {
    expect(resultForScore(0)).toBe(results[0])
    expect(resultForScore(maxScore)).toBe(results[results.length - 1])
  })
})

describe('parseCurrentAge', () => {
  it('accepts 15~80 and rejects junk', () => {
    expect(parseCurrentAge('29')).toBe(29)
    expect(parseCurrentAge(29)).toBe(29)
    expect(parseCurrentAge('14')).toBeNull()
    expect(parseCurrentAge('81')).toBeNull()
    expect(parseCurrentAge('abc')).toBeNull()
    expect(parseCurrentAge('')).toBeNull()
    expect(parseCurrentAge(null)).toBeNull()
  })
})

describe('parseShareParams', () => {
  it('parses a valid share link', () => {
    const shared = parseShareParams(new URLSearchParams('age=36&t=solo'))
    expect(shared?.age).toBe(36)
    expect(shared?.result.id).toBe('solo')
  })
  it('rejects unknown type or bad age', () => {
    expect(parseShareParams(new URLSearchParams('age=36&t=nope'))).toBeNull()
    expect(parseShareParams(new URLSearchParams('age=abc&t=solo'))).toBeNull()
    expect(parseShareParams(new URLSearchParams('t=solo'))).toBeNull()
  })
})
