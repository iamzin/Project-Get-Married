# 💍 나는 몇 살에 결혼할까?

연애 스타일, 돈, 일, 혼자 있는 시간… 15개의 질문으로 알아보는 결혼 타이밍 심리테스트.

## 구성

- 인트로(현재 나이 입력) → 15문항 (3지선다) → 결과 로딩 → 결과 페이지
- 답변별 점수(0~4)를 합산해 **지금부터 몇 년 뒤(1~12년)** 결혼할지 계산하고, 현재 나이에 더해 예상 결혼 나이를 보여줍니다. 유형은 점수 구간에 따라 6가지 중 하나.
- 결과 페이지는 `?age=36&t=solo` 쿼리로 공유 가능 (Web Share API · 링크 복사 · X 공유)

| 유형 | 결혼 시기 |
| --- | --- |
| ⚡ 번개 결혼형 | 지금부터 1~2년 뒤 |
| 💐 로맨틱 플래너 | 3~4년 뒤 |
| ⚖️ 밸런스 마스터 | 5~6년 뒤 |
| 💼 커리어 우선형 | 7~8년 뒤 |
| 🦋 자유로운 영혼 | 9~10년 뒤 |
| 🏝️ 독립 만렙형 | 11~12년 뒤 (혹은 비혼) |

## 개발

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # 채점 로직 테스트 (vitest)
npm run build    # dist/ 생성
```

## 배포 (Vercel)

1. [vercel.com/new](https://vercel.com/new) 에서 이 리포를 import
2. Framework Preset: **Vite** (자동 감지) · Build: `npm run build` · Output: `dist`
3. Deploy

또는 CLI:

```bash
npx vercel
```

## 커스터마이즈

- 질문/선택지: `src/data/questions.ts`
- 결과 유형/문구: `src/data/results.ts`
- 점수 → 유형/결혼 시기 변환: `src/lib/score.ts`
