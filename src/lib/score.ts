import { questions } from '../data/questions'
import { results, type ResultType } from '../data/results'

export const MIN_AGE = 23
export const MAX_AGE = 40

export const maxScore = questions.reduce(
  (sum, q) => sum + Math.max(...q.choices.map((c) => c.score)),
  0,
)

/** 총점(0~maxScore)을 예상 결혼 나이(23~40)로 변환 */
export function scoreToAge(total: number): number {
  const clamped = Math.min(Math.max(total, 0), maxScore)
  return MIN_AGE + Math.round((clamped / maxScore) * (MAX_AGE - MIN_AGE))
}

export function totalScore(answers: number[]): number {
  return answers.reduce((sum, choiceIdx, i) => {
    const choice = questions[i]?.choices[choiceIdx]
    return sum + (choice?.score ?? 0)
  }, 0)
}

export function resultForAge(age: number): ResultType {
  return results.find((r) => age >= r.minAge && age <= r.maxAge) ?? results[results.length - 1]
}

export function parseAgeParam(value: string | null): number | null {
  if (!value) return null
  const n = Number(value)
  if (!Number.isInteger(n) || n < MIN_AGE || n > MAX_AGE) return null
  return n
}
