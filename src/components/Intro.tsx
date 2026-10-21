import { questions } from '../data/questions'

interface Props {
  onStart: () => void
}

export function Intro({ onStart }: Props) {
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
        {questions.length}개의 질문으로 알아보는 나의 결혼 적령기
      </p>
      <button className="btn btn-primary" onClick={onStart}>
        테스트 시작하기
      </button>
      <p className="intro-meta">소요 시간 약 1분 · 로그인 없음</p>
    </section>
  )
}
