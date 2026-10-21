import { questions } from '../data/questions'
import { results, type ResultType } from '../data/results'

export const MIN_CURRENT_AGE = 15
export const MAX_CURRENT_AGE = 80

export const maxScore = questions.reduce(
  (sum, q) => sum + Math.max(...q.choices.map((c) => c.score)),
  0,
)

export function totalScore(answers: number[]): number {
  return answers.reduce((sum, choiceIdx, i) => {
    const choice = questions[i]?.choices[choiceIdx]
    return sum + (choice?.score ?? 0)
  }, 0)
}

function ratioOf(total: number): number {
  const clamped = Math.min(Math.max(total, 0), maxScore)
  return clamped / maxScore
}

/** 총점을 6개 유형 중 하나로 (0 = 가장 빨리, 5 = 가장 늦게) */
export function resultForScore(total: number): ResultType {
  const bucket = Math.min(results.length - 1, Math.floor(ratioOf(total) * results.length))
  return results[bucket]
}

/** 총점을 "몇 년 뒤 결혼"으로 변환 (1~12년). 유형별 2년 구간 안에서 세밀하게 나뉨 */
export function yearsUntilMarriage(total: number): number {
  const ratio = ratioOf(total)
  const scaled = ratio * results.length
  const bucket = Math.min(results.length - 1, Math.floor(scaled))
  const within = scaled - bucket
  return 2 * bucket + 1 + (within >= 0.5 ? 1 : 0)
}

export function predictedAge(currentAge: number, total: number): number {
  return currentAge + yearsUntilMarriage(total)
}

export function parseCurrentAge(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === '') return null
  const n = Number(value)
  if (!Number.isInteger(n) || n < MIN_CURRENT_AGE || n > MAX_CURRENT_AGE) return null
  return n
}

export interface SharedResult {
  age: number
  result: ResultType
}

/** 공유 링크 ?age=36&t=solo 파싱 */
export function parseShareParams(params: URLSearchParams): SharedResult | null {
  const age = Number(params.get('age'))
  const result = results.find((r) => r.id === params.get('t'))
  if (!result || !Number.isInteger(age) || age < MIN_CURRENT_AGE + 1 || age > MAX_CURRENT_AGE + 12) {
    return null
  }
  return { age, result }
}
