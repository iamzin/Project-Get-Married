import { useState } from 'react'
import type { ResultType } from '../data/results'

interface Props {
  age: number
  result: ResultType
  onRetry: () => void
}

export function Result({ age, result, onRetry }: Props) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `${window.location.origin}${window.location.pathname}?age=${age}`
  const homeUrl = `${window.location.origin}${window.location.pathname}`
  const shareText = `나는 ${age}살에 결혼한대요! ${result.emoji} ${result.title}\n너는 몇 살에 결혼할까?`

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('링크를 복사하세요', url)
    }
  }

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: '나는 몇 살에 결혼할까?', text: shareText, url: shareUrl })
        return
      } catch {
        /* user cancelled */
      }
    }
    copy(shareUrl)
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`

  return (
    <section className="screen result" style={{ ['--accent' as string]: result.color }}>
      <p className="eyebrow">당신의 예상 결혼 나이는</p>
      <div className="result-age">
        <span className="result-age-num">{age}</span>
        <span className="result-age-unit">살</span>
      </div>
      <div className="result-badge">
        <span className="result-emoji">{result.emoji}</span>
        <h2 className="result-title">{result.title}</h2>
        <p className="result-range">{result.ageLabel}</p>
      </div>

      <p className="result-desc">{result.description}</p>

      <ul className="traits">
        {result.traits.map((t) => (
          <li key={t} className="trait">
            #{t}
          </li>
        ))}
      </ul>

      <div className="result-card">
        <h3>💡 한 줄 조언</h3>
        <p>{result.advice}</p>
      </div>
      <div className="result-card">
        <h3>💞 이런 사람과 잘 맞아요</h3>
        <p>{result.partner}</p>
      </div>

      <div className="result-actions">
        <button className="btn btn-primary" onClick={share}>
          결과 공유하기
        </button>
        <div className="share-row">
          <button className="btn btn-ghost" onClick={() => copy(shareUrl)}>
            {copied ? '복사 완료 ✓' : '🔗 링크 복사'}
          </button>
          <a className="btn btn-ghost" href={twitterUrl} target="_blank" rel="noreferrer">
            𝕏 공유
          </a>
        </div>
        <button className="btn btn-outline" onClick={onRetry}>
          다시 테스트하기
        </button>
        <button className="btn btn-text" onClick={() => copy(homeUrl)}>
          친구에게 테스트 보내기
        </button>
      </div>
    </section>
  )
}
