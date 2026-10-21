export interface Choice {
  text: string
  /** 0 = 빨리 결혼하는 성향, 4 = 늦게 결혼하는 성향 */
  score: number
}

export interface Question {
  id: number
  text: string
  choices: Choice[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: '친구가 "나 결혼해!"라고 하면\n제일 먼저 드는 생각은?',
    choices: [
      { text: '부럽다… 나도 빨리 하고 싶어 🥹', score: 0 },
      { text: '축하해! 근데 난 아직 잘 모르겠네', score: 2 },
      { text: '벌써? 아직 놀 때 아닌가…', score: 4 },
    ],
  },
  {
    id: 2,
    text: '연애할 때 나의 스타일은?',
    choices: [
      { text: '사귀면 바로 둘의 미래를 그려본다', score: 0 },
      { text: '천천히 알아가며 확신이 생기면 깊어진다', score: 2 },
      { text: '지금이 즐거우면 됐지, 미래는 나중에', score: 4 },
    ],
  },
  {
    id: 3,
    text: '가장 끌리는 데이트는?',
    choices: [
      { text: '집에서 같이 요리하고 영화 보기 🍝', score: 0 },
      { text: '맛집 갔다가 느긋하게 산책 🚶', score: 2 },
      { text: '즉흥 여행! 어디든 떠나기 ✈️', score: 4 },
    ],
  },
  {
    id: 4,
    text: '부모님이 "결혼은 언제 하니?"\n라고 물어보면?',
    choices: [
      { text: '저도 빨리 하고 싶어요 ㅎㅎ', score: 0 },
      { text: '좋은 사람 생기면요~', score: 2 },
      { text: '그 얘기 좀 그만… 🙄', score: 4 },
    ],
  },
  {
    id: 5,
    text: '통장 잔고를 보며 드는 생각은?',
    choices: [
      { text: '둘이 같이 모으면 더 빨리 모이지 않을까?', score: 1 },
      { text: '결혼 자금은 어느 정도 모아두고 싶다', score: 3 },
      { text: '일단 나한테 쓰고 싶은 게 너무 많다', score: 4 },
    ],
  },
  {
    id: 6,
    text: '혼자 있는 시간은 나에게?',
    choices: [
      { text: '외롭다, 누가 옆에 있었으면', score: 0 },
      { text: '필요하긴 한데 너무 길면 심심하다', score: 2 },
      { text: '최고의 힐링, 없으면 못 산다', score: 4 },
    ],
  },
  {
    id: 7,
    text: '일과 가정, 솔직한 내 마음은?',
    choices: [
      { text: '일도 중요하지만 가정이 먼저', score: 0 },
      { text: '둘 다 균형 있게 챙기고 싶다', score: 2 },
      { text: '지금은 커리어에 올인할 때 💼', score: 4 },
    ],
  },
  {
    id: 8,
    text: '내 결혼식을 상상해 보면?',
    choices: [
      { text: '드레스/턱시도, 장소까지 이미 다 정해놨다', score: 0 },
      { text: '가끔 상상은 해봤다', score: 2 },
      { text: '상상해 본 적 없음. 안 해도 괜찮을 듯', score: 4 },
    ],
  },
  {
    id: 9,
    text: '연인과 크게 싸웠다. 나는?',
    choices: [
      { text: '바로 화해하고 싶어서 먼저 연락한다', score: 0 },
      { text: '하루 정도 생각 정리하고 대화한다', score: 2 },
      { text: '한동안 거리를 두고 각자 시간을 갖는다', score: 4 },
    ],
  },
  {
    id: 10,
    text: '반려동물이나 식물을 키우는 건?',
    choices: [
      { text: '이미 키우고 있거나 꼭 키우고 싶다 🐶', score: 0 },
      { text: '여건이 되면 키워보고 싶다', score: 2 },
      { text: '책임지기 부담스러워서 패스', score: 4 },
    ],
  },
  {
    id: 11,
    text: '친구들 사이에서 나는?',
    choices: [
      { text: '모임 주도하고 다 챙기는 엄마/아빠 같은 존재', score: 0 },
      { text: '적당히 어울리고 적당히 빠지는 타입', score: 2 },
      { text: '혼자 다니는 게 더 편한 타입', score: 4 },
    ],
  },
  {
    id: 12,
    text: '다른 도시로 이직 제안이 왔다면?',
    choices: [
      { text: '연인과 상의 후 결정, 함께 가는 게 조건', score: 0 },
      { text: '조건 보고 신중하게 결정', score: 2 },
      { text: '바로 고! 새로운 삶이 기다린다 🔥', score: 4 },
    ],
  },
  {
    id: 13,
    text: "나에게 '안정'이란?",
    choices: [
      { text: '사랑하는 사람과 함께하는 저녁 식사', score: 0 },
      { text: '내 집, 내 공간, 내 루틴', score: 2 },
      { text: '언제든 떠날 수 있는 자유', score: 4 },
    ],
  },
  {
    id: 14,
    text: '목돈이 생기면 가장 먼저 하고 싶은 건?',
    choices: [
      { text: '내 집 마련 or 신혼집 🏠', score: 0 },
      { text: '투자 or 저축 더', score: 2 },
      { text: '세계여행 or 나를 위한 큰 선물 🎁', score: 4 },
    ],
  },
  {
    id: 15,
    text: '10년 후 나의 모습은?',
    choices: [
      { text: '아이와 함께 공원에서 놀고 있다', score: 0 },
      { text: '일과 사랑 모두 안정된 모습', score: 2 },
      { text: '여전히 새로운 것을 찾아 떠나는 중', score: 4 },
    ],
  },
]
