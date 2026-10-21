import { describe, expect, it } from 'vitest'
import { questions } from '../data/questions'
import { results } from '../data/results'
import { MAX_AGE, MIN_AGE, maxScore, parseAgeParam, resultForAge, scoreToAge, totalScore } from './score'

describe('questions data', () => {
  it('has 15 questions with 3 choices each', () => {
    expect(questions).toHaveLength(15)
    for (const q of questions) expect(q.choices).toHaveLength(3)
  })
})

describe('scoreToAge', () => {
  it('maps min score to 23 and max score to 40', () => {
    expect(scoreToAge(0)).toBe(MIN_AGE)
    expect(scoreToAge(maxScore)).toBe(MAX_AGE)
  })
  it('clamps out-of-range scores', () => {
    expect(scoreToAge(-10)).toBe(MIN_AGE)
    expect(scoreToAge(maxScore + 50)).toBe(MAX_AGE)
  })
})

describe('totalScore', () => {
  it('sums the chosen scores', () => {
    const allFirst = questions.map(() => 0)
    expect(totalScore(allFirst)).toBe(questions.reduce((s, q) => s + q.choices[0].score, 0))
  })
})

describe('resultForAge', () => {
  it('covers every age from 23 to 40 with exactly one result', () => {
    for (let age = MIN_AGE; age <= MAX_AGE; age++) {
      const matches = results.filter((r) => age >= r.minAge && age <= r.maxAge)
      expect(matches, `age ${age}`).toHaveLength(1)
      expect(resultForAge(age)).toBe(matches[0])
    }
  })
})

describe('parseAgeParam', () => {
  it('accepts valid ages and rejects junk', () => {
    expect(parseAgeParam('27')).toBe(27)
    expect(parseAgeParam('22')).toBeNull()
    expect(parseAgeParam('41')).toBeNull()
    expect(parseAgeParam('abc')).toBeNull()
    expect(parseAgeParam(null)).toBeNull()
  })
})
