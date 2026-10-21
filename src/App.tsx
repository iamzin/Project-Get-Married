import { useEffect, useState } from 'react'
import { Intro } from './components/Intro'
import { Quiz } from './components/Quiz'
import { Loading } from './components/Loading'
import { Result } from './components/Result'
import type { ResultType } from './data/results'
import { parseShareParams, predictedAge, resultForScore, totalScore } from './lib/score'

type Stage = 'intro' | 'quiz' | 'loading' | 'result'

interface Outcome {
  age: number
  result: ResultType
}

export default function App() {
  const shared = parseShareParams(new URLSearchParams(window.location.search))
  const [stage, setStage] = useState<Stage>(shared ? 'result' : 'intro')
  const [currentAge, setCurrentAge] = useState<number | null>(null)
  const [outcome, setOutcome] = useState<Outcome | null>(shared)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [stage])

  const handleStart = (age: number) => {
    setCurrentAge(age)
    setStage('quiz')
  }

  const handleComplete = (answers: number[]) => {
    if (currentAge === null) return
    const total = totalScore(answers)
    const next = { age: predictedAge(currentAge, total), result: resultForScore(total) }
    setOutcome(next)
    setStage('loading')
    window.history.replaceState(null, '', `?age=${next.age}&t=${next.result.id}`)
    setTimeout(() => setStage('result'), 1600)
  }

  const handleRetry = () => {
    window.history.replaceState(null, '', window.location.pathname)
    setOutcome(null)
    setCurrentAge(null)
    setStage('intro')
  }

  return (
    <main className="app">
      {stage === 'intro' && <Intro onStart={handleStart} />}
      {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
      {stage === 'loading' && <Loading />}
      {stage === 'result' && outcome && (
        <Result age={outcome.age} currentAge={currentAge} result={outcome.result} onRetry={handleRetry} />
      )}
      <footer className="footer">재미로 보는 테스트예요 · 결과는 과학적 근거가 없습니다</footer>
    </main>
  )
}
