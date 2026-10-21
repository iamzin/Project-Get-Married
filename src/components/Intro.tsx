import { useState, type FormEvent } from 'react'
import { questions } from '../data/questions'
import { MAX_CURRENT_AGE, MIN_CURRENT_AGE, parseCurrentAge } from '../lib/score'

interface Props {
  onStart: (currentAge: number) => void
}

export function Intro({ onStart }: Props) {
  const [ageInput, setAgeInput] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const age = parseCurrentAge(ageInput)
    if (age === null) {
      setError(`${MIN_CURRENT_AGE}~${MAX_CURRENT_AGE} 사이의 나이를 입력해 주세요`)
      return
    }
    onStart(age)
  }

  return (
    <section className="screen intro">
      <div className="intro-hero" aria-hidden="true">
        <span className="ring ring-1" />
        <span className="ring ring-2" />
        <span className="hero-emoji">💍</span>
      </div>
      <p className="eyebrow">결혼 타이밍 심리테스트</p>
      <h1 className="intro-title">
        나는 몇 살에
        <br />
        결혼할까?
      </h1>
      <p className="intro-desc">
        연애 스타일, 돈, 일, 혼자 있는 시간…
        <br />
        {questions.length}개의 질문으로 알아보는 나의 결혼 타이밍
      </p>

      <form className="age-form" onSubmit={submit} noValidate>
        <label className="age-label" htmlFor="current-age">
          지금 나이를 알려주세요
        </label>
        <div className="age-input-wrap">
          <input
            id="current-age"
            className="age-input"
            type="number"
            inputMode="numeric"
            min={MIN_CURRENT_AGE}
            max={MAX_CURRENT_AGE}
            placeholder="29"
            value={ageInput}
            onChange={(e) => {
              setAgeInput(e.target.value)
              setError(null)
            }}
            autoFocus
          />
          <span className="age-unit">살</span>
        </div>
        {error && <p className="age-error">{error}</p>}
        <button className="btn btn-primary" type="submit">
          테스트 시작하기
        </button>
      </form>
      <p className="intro-meta">소요 시간 약 1분 · 로그인 없음</p>
    </section>
  )
}
