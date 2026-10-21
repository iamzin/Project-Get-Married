export function Loading() {
  return (
    <section className="screen loading">
      <div className="loader" aria-hidden="true">
        <span className="loader-emoji">💌</span>
      </div>
      <p className="loading-text">당신의 결혼 타이밍을 계산하는 중…</p>
    </section>
  )
}
