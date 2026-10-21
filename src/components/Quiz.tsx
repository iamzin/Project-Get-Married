import { useState } from 'react'
import { questions } from '../data/questions'

interface Props {
  onComplete: (answers: number[]) => void
}

export function Quiz({ onComplete }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [animKey, setAnimKey] = useState(0)

  const question = questions[index]
  const progress = (index / questions.length) * 100

  const choose = (choiceIdx: number) => {
    const next = [...answers, choiceIdx]
    if (index + 1 >= questions.length) {
      onComplete(next)
      return
    }
    setAnswers(next)
    setIndex(index + 1)
    setAnimKey((k) => k + 1)
  }

  const back = () => {
    if (index === 0) return
    setAnswers(answers.slice(0, -1))
    setIndex(index - 1)
    setAnimKey((k) => k + 1)
  }

  return (
    <section className="screen quiz">
      <div className="quiz-top">
        <button className="btn-back" onClick={back} disabled={index === 0} aria-label="이전 질문">
          ←
        </button>
        <span className="quiz-count">
          <strong>{index + 1}</strong> / {questions.length}
        </span>
      </div>
      <div className="progress" role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={questions.length}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="question-wrap" key={animKey}>
        <p className="question-no">Q{question.id}</p>
        <h2 className="question-text">
          {question.text.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <ul className="choices">
          {question.choices.map((c, i) => (
            <li key={i}>
              <button className="choice" onClick={() => choose(i)}>
                {c.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
