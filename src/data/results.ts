export interface ResultType {
  id: string
  emoji: string
  title: string
  timing: string
  description: string
  traits: string[]
  advice: string
  partner: string
  color: string
}

export const results: ResultType[] = [
  {
    id: 'lightning',
    emoji: '⚡',
    title: '번개 결혼형',
    timing: '지금부터 1~2년 뒤',
    description:
      '사랑 앞에서 망설임이 없는 당신! "이 사람이다" 싶으면 바로 직진하는 타입이에요. 주변에서 "벌써?"라고 하겠지만, 당신은 이미 답을 알고 있죠. 함께하는 일상이 가장 큰 행복인 사람.',
    traits: ['직진 로맨티스트', '가정적', '결정이 빠름'],
    advice: '속도는 좋지만 현실 체크도 가끔 필요해요. 결혼 전 돈 얘기, 꼭 한 번은 해보기!',
    partner: '같이 꿈을 꿀 수 있는 사람',
    color: '#ff6b81',
  },
  {
    id: 'planner',
    emoji: '💐',
    title: '로맨틱 플래너',
    timing: '지금부터 3~4년 뒤',
    description:
      '사랑도 계획도 둘 다 놓치지 않는 당신. 결혼은 분명 하고 싶지만 "준비된 결혼"을 꿈꿔요. 모든 퍼즐이 맞춰지는 순간 당신은 망설임 없이 식장으로 향할 거예요.',
    traits: ['계획적', '다정함', '현실 감각'],
    advice: '완벽한 타이밍은 없어요. 80% 준비됐다면 그게 100%일지도!',
    partner: '약속을 지키는 든든한 사람',
    color: '#ff8e6e',
  },
  {
    id: 'balance',
    emoji: '⚖️',
    title: '밸런스 마스터',
    timing: '지금부터 5~6년 뒤',
    description:
      '일, 사랑, 나 자신 사이에서 균형을 찾는 당신. 서두르지도, 늦추지도 않아요. 가장 자연스러운 타이밍에 가장 자연스러운 사람과 함께하게 될 거예요.',
    traits: ['균형 잡힌', '성숙함', '신뢰감'],
    advice: '균형을 지키느라 마음의 소리를 놓치지 마세요. 가끔은 감정에 솔직해져도 괜찮아요.',
    partner: '서로의 삶을 존중해주는 사람',
    color: '#f5a623',
  },
  {
    id: 'career',
    emoji: '💼',
    title: '커리어 우선형',
    timing: '지금부터 7~8년 뒤',
    description:
      '지금은 나를 키울 때! 결혼은 "언젠가"지만 그 전에 이루고 싶은 게 너무 많아요. 원하는 걸 어느 정도 손에 넣은 뒤에야 결혼이 눈에 들어오기 시작할 거예요.',
    traits: ['야망', '독립적', '자기 주도'],
    advice: '일만큼 사람에게도 시간을 투자해 보세요. 좋은 인연은 바쁜 틈에 찾아오기도 해요.',
    partner: '내 커리어를 응원해주는 사람',
    color: '#5b8def',
  },
  {
    id: 'free',
    emoji: '🦋',
    title: '자유로운 영혼',
    timing: '지금부터 9~10년 뒤',
    description:
      '틀에 갇히는 걸 싫어하는 당신. 결혼은 삶의 선택지 중 하나일 뿐이에요! 충분히 세상을 누빈 뒤, 함께 날아줄 사람을 만나면 그때가 바로 당신의 타이밍.',
    traits: ['모험가', '자유로움', '호기심'],
    advice: '자유와 함께함은 반대말이 아니에요. 같은 방향을 보는 사람이라면 자유는 두 배가 돼요.',
    partner: '함께 떠날 수 있는 여행 메이트',
    color: '#9b6bff',
  },
  {
    id: 'solo',
    emoji: '🏝️',
    title: '독립 만렙형',
    timing: '지금부터 11~12년 뒤 (혹은 비혼)',
    description:
      '혼자서도 완벽하게 행복한 당신. 결혼은 필수가 아니라 옵션! 하게 된다면 아주 늦게, 아니면 안 해도 괜찮아요. 당신의 삶은 이미 충분히 꽉 차 있으니까요.',
    traits: ['자기 확신', '평온함', '취향 확실'],
    advice: '혼자가 편한 건 당신의 큰 장점이에요. 다만 문은 살짝 열어두기, 의외의 사람이 들어올지도!',
    partner: '각자의 공간을 지켜줄 수 있는 사람',
    color: '#2ec4b6',
  },
]
