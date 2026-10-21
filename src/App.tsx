import { useEffect, useState } from 'react'
import { Intro } from './components/Intro'
import { Quiz } from './components/Quiz'
import { Loading } from './components/Loading'
import { Result } from './components/Result'
import { parseAgeParam, resultForAge, scoreToAge, totalScore } from './lib/score'

type Stage = 'intro' | 'quiz' | 'loading' | 'result'

function readAgeFromUrl(): number | null {
  return parseAgeParam(new URLSearchParams(window.location.search).get('age'))
}

export default function App() {
  const initialAge = readAgeFromUrl()
  const [stage, setStage] = useState<Stage>(initialAge ? 'result' : 'intro')
  const [age, setAge] = useState<number | null>(initialAge)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [stage])

  const handleComplete = (answers: number[]) => {
    const computed = scoreToAge(totalScore(answers))
    setAge(computed)
    setStage('loading')
    window.history.replaceState(null, '', `?age=${computed}`)
    setTimeout(() => setStage('result'), 1600)
  }

  const handleRetry = () => {
    window.history.replaceState(null, '', window.location.pathname)
    setAge(null)
    setStage('intro')
  }

  return (
    <main className="app">
      {stage === 'intro' && <Intro onStart={() => setStage('quiz')} />}
      {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
      {stage === 'loading' && <Loading />}
      {stage === 'result' && age !== null && (
        <Result age={age} result={resultForAge(age)} onRetry={handleRetry} />
      )}
      <footer className="footer">재미로 보는 테스트예요 · 결과는 과학적 근거가 없습니다</footer>
    </main>
  )
}
