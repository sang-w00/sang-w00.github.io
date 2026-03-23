const state = {
  lang: localStorage.getItem('nyc-trip-lang') || 'ko',
};

const UI_COPY = {
  ko: {
    eyebrow: 'NYC March Trip',
    title: '뉴욕 3박 4일 여행 플래너',
    subtitle: '2026년 3월 24일 화요일 - 3월 27일 금요일, The New Yorker Hotel 기준',
    heroDescription:
      '도착부터 출국까지, 이동 동선과 티켓 포인트를 모바일에서 바로 확인할 수 있게 정리한 일정표입니다.',
    share: '일정 공유',
    shareDone: '링크 복사됨',
    maps: 'Google Maps 열기',
    photo: '사진 출처 보기',
    photoCredit: 'Photo via Wikipedia',
    dayThemeLabel: '오늘의 포인트',
    glance: [
      { label: '호텔', value: 'The New Yorker' },
      { label: '교통', value: 'OMNY 12회 후 추가 무료' },
      { label: '뷰 스팟', value: 'Top of the Rock + SUMMIT' },
      { label: '공항', value: 'JFK 입국 / EWR 출국' },
    ],
    panels: {
      essentials: [
        {
          title: '핵심 메모',
          items: [
            '<strong>OMNY</strong>: 지하철과 로컬 버스는 같은 카드나 같은 휴대폰으로 계속 탭하는 게 좋아요.',
            '<strong>요금 기준</strong>: MTA 기본 지하철/로컬버스는 1회 $3로 잡아두면 편합니다.',
            '<strong>7일 캡</strong>: 7일 안에 12번 결제 이후 추가 rides는 무료라는 전제로 일정에 반영했습니다.',
          ],
        },
        {
          title: '호텔 메모',
          items: [
            '<strong>체크인 / 체크아웃</strong>: 16:00 / 11:00',
            '<strong>짐보관</strong>: 가방당 $5',
            '<strong>추가 비용</strong>: facility fee $40 + tax / 박',
          ],
        },
        {
          title: '공항 이동',
          items: [
            '<strong>JFK → Penn</strong>: AirTrain + LIRR CityTicket이 가장 단순합니다.',
            '<strong>Penn → EWR</strong>: NJ Transit + AirTrain Newark 조합이 가장 간단합니다.',
            'Penn Station이 호텔 바로 옆이라 첫날과 마지막 날 동선이 아주 깔끔합니다.',
          ],
        },
      ],
      costs: [
        {
          title: '교통 예산',
          items: [
            '<strong>JFK → Penn</strong>: 1인 약 $14-16',
            '<strong>OMNY</strong>: 12회 결제까지는 실제 과금, 이후 무료 rides',
            '<strong>Penn → EWR</strong>: NJ Transit + AirTrain Newark 별도 예산 필요',
          ],
        },
        {
          title: '예약 추천',
          items: [
            '<strong>Statue City Cruises</strong>: 자유의 여신상 페리는 사전 예약 권장',
            '<strong>Top of the Rock</strong>: 화요일 sunset 직전 슬롯이 가장 예쁨',
            '<strong>SUMMIT</strong>: 선글라스와 pants/shorts/tights 권장',
          ],
        },
        {
          title: '대표 입장료',
          items: [
            '<strong>Statue ferry</strong>: adult $26',
            '<strong>The Met</strong>: adult $30 / student $17',
            '<strong>Vessel</strong>: 약 $12, <strong>SUMMIT</strong>: 약 $47부터',
          ],
        },
      ],
    },
    kinds: {
      transfer: '이동',
      logistics: '체크포인트',
      breakfast: '아침',
      meal: '식사',
      stroll: '산책',
      landmark: '랜드마크',
      tickets: '티켓',
      break: '휴식',
      rest: '휴식',
      observation: '전망',
      ferry: '페리',
      walk: '도보',
      meeting: '약속',
      show: '공연',
      museum: '뮤지엄',
      park: '공원',
    },
  },
  en: {
    eyebrow: 'NYC March Trip',
    title: 'New York 4-Day Trip Planner',
    subtitle: 'Tuesday, March 24, 2026 - Friday, March 27, 2026, based at The New Yorker Hotel',
    heroDescription:
      'A mobile-first itinerary with transfer notes, ticket reminders, and easy map links from arrival to departure.',
    share: 'Share plan',
    shareDone: 'Link copied',
    maps: 'Open in Google Maps',
    photo: 'Photo source',
    photoCredit: 'Photo via Wikipedia',
    dayThemeLabel: 'Theme of the day',
    glance: [
      { label: 'Hotel', value: 'The New Yorker' },
      { label: 'Transit', value: 'OMNY cap after 12 paid rides' },
      { label: 'Viewpoints', value: 'Top of the Rock + SUMMIT' },
      { label: 'Airports', value: 'Arrive JFK / Depart EWR' },
    ],
    panels: {
      essentials: [
        {
          title: 'Core Notes',
          items: [
            '<strong>OMNY</strong>: keep tapping with the same card or the same phone for subway and local buses.',
            '<strong>Base fare</strong>: plan around $3 per ride for standard MTA subway and local bus trips.',
            '<strong>7-day cap</strong>: after 12 paid rides within 7 days, additional rides are treated as free in this plan.',
          ],
        },
        {
          title: 'Hotel Notes',
          items: [
            '<strong>Check-in / check-out</strong>: 4:00 PM / 11:00 AM',
            '<strong>Bag storage</strong>: $5 per bag',
            '<strong>Extra hotel fee</strong>: facility fee of $40 + tax per night',
          ],
        },
        {
          title: 'Airport Transfers',
          items: [
            '<strong>JFK → Penn</strong>: AirTrain + LIRR CityTicket is the simplest route.',
            '<strong>Penn → EWR</strong>: NJ Transit + AirTrain Newark is the cleanest route out.',
            'Because the hotel is next to Penn Station, both airport days stay very efficient.',
          ],
        },
      ],
      costs: [
        {
          title: 'Transit Budget',
          items: [
            '<strong>JFK → Penn</strong>: about $14-16 per person',
            '<strong>OMNY</strong>: you pay until 12 rides, then extra rides are free',
            '<strong>Penn → EWR</strong>: budget separately for NJ Transit + AirTrain Newark',
          ],
        },
        {
          title: 'Book Ahead',
          items: [
            '<strong>Statue City Cruises</strong>: reserve in advance for Statue of Liberty / Ellis Island',
            '<strong>Top of the Rock</strong>: Tuesday close to sunset gives the best skyline transition',
            '<strong>SUMMIT</strong>: sunglasses and pants/shorts/tights are recommended',
          ],
        },
        {
          title: 'Key Ticket Prices',
          items: [
            '<strong>Statue ferry</strong>: adult $26',
            '<strong>The Met</strong>: adult $30 / student $17',
            '<strong>Vessel</strong>: about $12, <strong>SUMMIT</strong>: from about $47',
          ],
        },
      ],
    },
    kinds: {
      transfer: 'Transfer',
      logistics: 'Logistics',
      breakfast: 'Breakfast',
      meal: 'Meal',
      stroll: 'Stroll',
      landmark: 'Landmark',
      tickets: 'Tickets',
      break: 'Break',
      rest: 'Rest',
      observation: 'Observation',
      ferry: 'Ferry',
      walk: 'Walk',
      meeting: 'Meet-up',
      show: 'Show',
      museum: 'Museum',
      park: 'Park',
    },
  },
};

const PLACES = {
  hotel: {
    name: {
      ko: 'The New Yorker, A Wyndham Hotel',
      en: 'The New Yorker, A Wyndham Hotel',
    },
    mapQuery: 'The New Yorker Hotel 481 8th Ave New York NY',
    photoTitles: ['The New Yorker Hotel', 'Pennsylvania Station (New York City)'],
  },
  jfkPennRoute: {
    name: {
      ko: 'JFK Airport → Jamaica → Penn Station',
      en: 'JFK Airport → Jamaica → Penn Station',
    },
    mapQuery: 'Penn Station New York NY',
    photoTitles: ['Pennsylvania Station (New York City)', 'John F. Kennedy International Airport'],
  },
  essabagel: {
    name: {
      ko: 'Ess-a-Bagel W 32nd',
      en: 'Ess-a-Bagel W 32nd',
    },
    mapQuery: 'Ess-a-Bagel 108 W 32nd St New York NY',
    photoTitles: ['Bagel', 'Koreatown, Manhattan'],
  },
  empire: {
    name: {
      ko: 'Empire State Building',
      en: 'Empire State Building',
    },
    mapQuery: 'Empire State Building New York NY',
    photoTitles: ['Empire State Building'],
  },
  heraldKtown: {
    name: {
      ko: 'Herald Square / 34가 / Koreatown',
      en: 'Herald Square / 34th St / Koreatown',
    },
    mapQuery: 'Herald Square New York NY',
    photoTitles: ['Herald Square', 'Koreatown, Manhattan'],
  },
  timesSquare: {
    name: {
      ko: 'Times Square',
      en: 'Times Square',
    },
    mapQuery: 'Times Square New York NY',
    photoTitles: ['Times Square'],
  },
  lenaHorne: {
    name: {
      ko: 'Lena Horne Theatre',
      en: 'Lena Horne Theatre',
    },
    mapQuery: 'Lena Horne Theatre 256 W 47th St New York NY',
    photoTitles: ['Lena Horne Theatre'],
  },
  carmines: {
    name: {
      ko: "Carmine's Times Square",
      en: "Carmine's Times Square",
    },
    mapQuery: "Carmine's Times Square 200 W 44th St New York NY",
    photoTitles: ['Times Square', 'Italian-American cuisine'],
  },
  topOfRock: {
    name: {
      ko: 'Top of the Rock',
      en: 'Top of the Rock',
    },
    mapQuery: 'Top of the Rock Observation Deck New York NY',
    photoTitles: ['Rockefeller Center', 'Top of the Rock'],
  },
  batteryPark: {
    name: {
      ko: 'Battery Park',
      en: 'Battery Park',
    },
    mapQuery: 'Battery Park New York NY',
    photoTitles: ['Battery Park', 'Statue of Liberty'],
  },
  statueEllis: {
    name: {
      ko: 'Statue of Liberty / Ellis Island',
      en: 'Statue of Liberty / Ellis Island',
    },
    mapQuery: 'Statue City Cruises Battery Park New York NY',
    photoTitles: ['Statue of Liberty', 'Ellis Island'],
  },
  wallStreet: {
    name: {
      ko: 'Wall Street / Charging Bull / NYSE',
      en: 'Wall Street / Charging Bull / NYSE',
    },
    mapQuery: 'Charging Bull New York NY',
    photoTitles: ['Wall Street', 'Charging Bull'],
  },
  eatalyDowntown: {
    name: {
      ko: 'Eataly Downtown',
      en: 'Eataly Downtown',
    },
    mapQuery: 'Eataly Downtown 101 Liberty St New York NY',
    photoTitles: ['Eataly', 'World Trade Center (2001–present)'],
  },
  brooklynBridge: {
    name: {
      ko: 'Brooklyn Bridge',
      en: 'Brooklyn Bridge',
    },
    mapQuery: 'Brooklyn Bridge New York NY',
    photoTitles: ['Brooklyn Bridge'],
  },
  dumbo: {
    name: {
      ko: 'DUMBO',
      en: 'DUMBO',
    },
    mapQuery: 'DUMBO Brooklyn New York NY',
    photoTitles: ['DUMBO, Brooklyn'],
  },
  nomad: {
    name: {
      ko: 'NoMad',
      en: 'NoMad',
    },
    mapQuery: 'NoMad Manhattan New York NY',
    photoTitles: ['NoMad, Manhattan'],
  },
  chachamatcha: {
    name: {
      ko: 'Cha Cha Matcha NoMad',
      en: 'Cha Cha Matcha NoMad',
    },
    mapQuery: 'Cha Cha Matcha 1158 Broadway New York NY',
    photoTitles: ['NoMad, Manhattan', 'Matcha'],
  },
  madisonSquarePark: {
    name: {
      ko: 'Madison Square Park + Eataly Flatiron',
      en: 'Madison Square Park + Eataly Flatiron',
    },
    mapQuery: 'Madison Square Park New York NY',
    photoTitles: ['Madison Square Park', 'Eataly'],
  },
  eatalyFlatiron: {
    name: {
      ko: 'Eataly Flatiron',
      en: 'Eataly Flatiron',
    },
    mapQuery: 'Eataly NYC Flatiron 200 5th Ave New York NY',
    photoTitles: ['Eataly', 'Flatiron Building'],
  },
  sarabeths: {
    name: {
      ko: "Sarabeth's Central Park South",
      en: "Sarabeth's Central Park South",
    },
    mapQuery: "Sarabeth's Central Park South 40 Central Park S New York NY",
    photoTitles: ['Central Park', 'Central Park South'],
  },
  centralPark: {
    name: {
      ko: 'Central Park',
      en: 'Central Park',
    },
    mapQuery: 'Central Park New York NY',
    photoTitles: ['Central Park'],
  },
  met: {
    name: {
      ko: 'The Met Fifth Avenue',
      en: 'The Met Fifth Avenue',
    },
    mapQuery: 'Metropolitan Museum of Art New York NY',
    photoTitles: ['Metropolitan Museum of Art'],
  },
  bryantPark: {
    name: {
      ko: 'Bryant Park',
      en: 'Bryant Park',
    },
    mapQuery: 'Bryant Park New York NY',
    photoTitles: ['Bryant Park'],
  },
  nypl: {
    name: {
      ko: 'NYPL Stephen A. Schwarzman Building',
      en: 'NYPL Stephen A. Schwarzman Building',
    },
    mapQuery: 'Stephen A. Schwarzman Building New York NY',
    photoTitles: ['New York Public Library Main Branch'],
  },
  grandCentral: {
    name: {
      ko: 'Grand Central Terminal',
      en: 'Grand Central Terminal',
    },
    mapQuery: 'Grand Central Terminal New York NY',
    photoTitles: ['Grand Central Terminal'],
  },
  vanderbiltMarket: {
    name: {
      ko: 'Vanderbilt Market',
      en: 'Vanderbilt Market',
    },
    mapQuery: 'One Vanderbilt New York NY',
    photoTitles: ['Grand Central Terminal', 'One Vanderbilt'],
  },
  summit: {
    name: {
      ko: 'SUMMIT One Vanderbilt',
      en: 'SUMMIT One Vanderbilt',
    },
    mapQuery: 'SUMMIT One Vanderbilt New York NY',
    photoTitles: ['One Vanderbilt'],
  },
  vessel: {
    name: {
      ko: 'Vessel',
      en: 'Vessel',
    },
    mapQuery: 'Vessel Hudson Yards New York NY',
    photoTitles: ['Vessel (structure)'],
  },
  highLine: {
    name: {
      ko: 'High Line',
      en: 'High Line',
    },
    mapQuery: 'High Line New York NY',
    photoTitles: ['High Line'],
  },
  chelseaMarket: {
    name: {
      ko: 'Chelsea Market',
      en: 'Chelsea Market',
    },
    mapQuery: 'Chelsea Market 75 9th Ave New York NY',
    photoTitles: ['Chelsea Market'],
  },
  pennEwrRoute: {
    name: {
      ko: 'Penn Station → Newark Airport Station → EWR',
      en: 'Penn Station → Newark Airport Station → EWR',
    },
    mapQuery: 'Newark Liberty International Airport Newark NJ',
    photoTitles: ['Newark Liberty International Airport', 'Pennsylvania Station (New York City)'],
  },
};

const DAYS = [
  {
    id: 'day-1',
    rgb: '204, 91, 70',
    label: { ko: '화요일 3/24', en: 'Tue 3/24' },
    title: {
      ko: '도착일 / 미드타운 + 타임스퀘어 낮·밤 + Top of the Rock',
      en: 'Arrival / Midtown + Times Square Day & Night + Top of the Rock',
    },
    theme: {
      ko: 'Penn Station 인접 동선으로 첫날 체력 아끼기',
      en: 'Use the Penn Station location to keep day one light and efficient',
    },
    events: [
      {
        time: '07:30-09:20',
        kind: 'transfer',
        place: 'jfkPennRoute',
        title: {
          ko: 'JFK 도착 후 Penn Station 이동',
          en: 'Arrive at JFK and transfer to Penn Station',
        },
        detail: {
          ko: '수하물 찾은 뒤 AirTrain → Jamaica → LIRR CityTicket으로 이동. AirTrain $8.75, 전체는 1인 약 $14-16로 예상하면 됩니다.',
          en: 'After baggage claim, take AirTrain to Jamaica and then the LIRR CityTicket route to Penn Station. Budget roughly $14-16 per person.',
        },
        chips: {
          ko: ['AirTrain + LIRR', 'Penn Station 바로 옆 호텔'],
          en: ['AirTrain + LIRR', 'Hotel is right next to Penn Station'],
        },
      },
      {
        time: '09:20-09:35',
        kind: 'logistics',
        place: 'hotel',
        title: {
          ko: '호텔 도착, 짐 맡기기',
          en: 'Reach the hotel and store luggage',
        },
        detail: {
          ko: '체크인은 16:00라서 먼저 짐만 맡기고 미드타운 동선으로 바로 출발합니다.',
          en: 'Since check-in starts at 4:00 PM, drop the bags first and head straight into the Midtown loop.',
        },
        chips: {
          ko: ['짐보관 $5/가방', '체크인 16:00'],
          en: ['Bag storage $5 per bag', 'Check-in at 4:00 PM'],
        },
      },
      {
        time: '09:40-10:20',
        kind: 'breakfast',
        place: 'essabagel',
        title: {
          ko: 'Ess-a-Bagel에서 아침',
          en: 'Breakfast at Ess-a-Bagel',
        },
        detail: {
          ko: '108 W 32nd St. 오픈 6:00-19:00이라 도착 직후 들르기 좋고, 호텔에서 도보 이동이 편합니다.',
          en: 'At 108 W 32nd St. It opens 6:00 AM-7:00 PM, which makes it an easy first stop after arrival.',
        },
        chips: {
          ko: ['도보권', '베이글 브런치 스타트'],
          en: ['Walkable', 'Bagel breakfast start'],
        },
      },
      {
        time: '10:30-11:00',
        kind: 'landmark',
        place: 'empire',
        title: {
          ko: '엠파이어 스테이트 빌딩 외관 보기',
          en: 'Quick exterior stop at the Empire State Building',
        },
        detail: {
          ko: '첫날은 전망대 대신 외관만 보고 지나가면서 미드타운 감을 잡는 코스입니다.',
          en: 'This is an exterior-only stop on arrival day so you can keep moving without spending extra time.',
        },
        chips: {
          ko: ['외관만', '도보 이동'],
          en: ['Exterior only', 'Short walk'],
        },
      },
      {
        time: '11:10-12:00',
        kind: 'stroll',
        place: 'heraldKtown',
        title: {
          ko: 'Herald Square / 34가 / K-town 가볍게 돌기',
          en: 'Easy stroll through Herald Square, 34th Street, and Koreatown',
        },
        detail: {
          ko: '쇼핑, 거리 분위기, 간식 포인트를 미리 확인해 두기 좋은 시간입니다.',
          en: 'A light walk to scope out shopping, street energy, and snack options for later.',
        },
        chips: {
          ko: ['낮 산책', '가벼운 쇼핑'],
          en: ['Daytime walk', 'Light shopping'],
        },
      },
      {
        time: '12:10-13:10',
        kind: 'stroll',
        place: 'timesSquare',
        title: {
          ko: '타임스퀘어 낮 풍경 + 브로드웨이 산책',
          en: 'Daytime Times Square and Broadway theater district walk',
        },
        detail: {
          ko: '밤과 분위기가 달라서 낮 버전도 따로 보는 일정으로 잡았습니다.',
          en: 'The daytime feel is very different from the neon night version, so it is worth seeing both.',
        },
        chips: {
          ko: ['브로드웨이 존', '낮/밤 비교'],
          en: ['Broadway district', 'Compare day vs night'],
        },
      },
      {
        time: '13:10-13:30',
        kind: 'tickets',
        place: 'lenaHorne',
        title: {
          ko: 'Lena Horne Theatre 박스오피스에서 SIX 표 구매',
          en: 'Buy SIX tickets at the Lena Horne Theatre box office',
        },
        detail: {
          ko: '박스오피스 오픈 시간 안에 들러 handling fee 없이 표를 노려볼 수 있는 슬롯입니다.',
          en: 'A quick box-office stop that may save handling fees if seats are still available.',
        },
        chips: {
          ko: ['10:00-20:00 박스오피스', 'handling fee 절약'],
          en: ['Box office 10:00 AM-8:00 PM', 'Potentially no handling fee'],
        },
      },
      {
        time: '13:30-15:30',
        kind: 'break',
        place: 'heraldKtown',
        title: {
          ko: '코리아타운 카페 / 디저트 타임',
          en: 'Relax at a Koreatown cafe or dessert spot',
        },
        detail: {
          ko: '체크인 전 빈 시간을 무리 없이 보내기 좋은 완충 구간입니다.',
          en: 'A nice buffer before check-in so the first day does not feel rushed.',
        },
        chips: {
          ko: ['체크인 전 완충', '실내 휴식'],
          en: ['Pre-check-in buffer', 'Indoor break'],
        },
      },
      {
        time: '16:00-17:20',
        kind: 'rest',
        place: 'hotel',
        title: {
          ko: '체크인 + 휴식',
          en: 'Check in and rest',
        },
        detail: {
          ko: '잠깐 눕고 정리한 뒤 저녁과 야경 일정으로 넘어가면 체력 분배가 훨씬 편합니다.',
          en: 'A short reset here makes the dinner and skyline evening much easier to enjoy.',
        },
        chips: {
          ko: ['샤워 / 정리', '저녁 전 리셋'],
          en: ['Reset and freshen up', 'Rest before dinner'],
        },
      },
      {
        time: '18:00-19:10',
        kind: 'meal',
        place: 'carmines',
        title: {
          ko: "Carmine's Times Square 저녁",
          en: "Dinner at Carmine's Times Square",
        },
        detail: {
          ko: '3명이 share하기 좋아서 첫날 저녁으로 잘 맞고, 타임스퀘어 야경 동선과도 자연스럽게 이어집니다.',
          en: 'A great family-style dinner stop for three, and it flows naturally into the evening Times Square plan.',
        },
        chips: {
          ko: ['공유 메뉴', '타임스퀘어 인접'],
          en: ['Shareable plates', 'Near Times Square'],
        },
      },
      {
        time: '19:30-20:40',
        kind: 'observation',
        place: 'topOfRock',
        title: {
          ko: 'Top of the Rock에서 sunset to night',
          en: 'Top of the Rock for sunset into night',
        },
        detail: {
          ko: '화요일은 이 시간대가 낮빛에서 야경으로 넘어가는 가장 예쁜 구간이라 메인 전망대로 배치했습니다.',
          en: 'This Tuesday slot catches the skyline transition from daylight to night, which makes it the best main viewpoint of the day.',
        },
        chips: {
          ko: ['약 $42-71', '야경 메인'],
          en: ['About $42-71', 'Main skyline stop'],
        },
      },
      {
        time: '20:45-21:30',
        kind: 'stroll',
        place: 'timesSquare',
        title: {
          ko: '타임스퀘어 밤 2차',
          en: 'Second Times Square pass at night',
        },
        detail: {
          ko: '전망대 이후 다시 내려와 네온과 인파가 꽉 찬 밤 분위기를 마무리로 즐깁니다.',
          en: 'Come back down after the observation deck and finish the night in the full neon energy of Times Square.',
        },
        chips: {
          ko: ['야경 마무리', '호텔 복귀 쉬움'],
          en: ['Final night walk', 'Easy return to hotel'],
        },
      },
    ],
  },
  {
    id: 'day-2',
    rgb: '38, 126, 117',
    label: { ko: '수요일 3/25', en: 'Wed 3/25' },
    title: {
      ko: '자유의 여신상 + 월스트리트 + 브루클린브리지 + DUMBO + SIX',
      en: 'Statue of Liberty + Wall Street + Brooklyn Bridge + DUMBO + SIX',
    },
    theme: {
      ko: '다운타운부터 브리지까지 길게 걷고, 밤에는 브로드웨이로 마무리',
      en: 'A long downtown-to-bridge day that ends with Broadway',
    },
    events: [
      {
        time: '08:15-08:55',
        kind: 'transfer',
        place: 'batteryPark',
        title: {
          ko: '호텔 출발, 지하철로 Battery Park 이동',
          en: 'Leave the hotel and ride the subway to Battery Park',
        },
        detail: {
          ko: '오전 페리 탑승을 위해 조금 여유 있게 남쪽으로 이동합니다.',
          en: 'Head downtown with a bit of buffer before the ferry departure window.',
        },
        chips: {
          ko: ['OMNY 탭', '다운타운 이동'],
          en: ['Tap with OMNY', 'Downtown transfer'],
        },
      },
      {
        time: '09:00-11:45',
        kind: 'ferry',
        place: 'statueEllis',
        title: {
          ko: 'Statue of Liberty / Ellis Island',
          en: 'Statue of Liberty / Ellis Island',
        },
        detail: {
          ko: '공식 판매처는 Statue City Cruises 기준으로 잡고, adult fare는 $26을 기준 예산으로 두면 됩니다.',
          en: 'Use Statue City Cruises as the official seller and budget around $26 for the standard adult ferry fare.',
        },
        chips: {
          ko: ['사전 예약 추천', '공식 페리'],
          en: ['Advance booking recommended', 'Official ferry'],
        },
      },
      {
        time: '11:50-12:25',
        kind: 'stroll',
        place: 'wallStreet',
        title: {
          ko: '월스트리트 / Charging Bull / NYSE 외관',
          en: 'Wall Street, Charging Bull, and the NYSE exterior',
        },
        detail: {
          ko: '페리 이후 다운타운 핵심 포인트만 빠르게 짚는 짧은 구간입니다.',
          en: 'A compact downtown checkpoint after the ferry, focused on the main exterior sights.',
        },
        chips: {
          ko: ['금융가 스팟', '사진 위주'],
          en: ['Financial district icons', 'Photo stop'],
        },
      },
      {
        time: '12:35-13:35',
        kind: 'meal',
        place: 'eatalyDowntown',
        title: {
          ko: 'Eataly Downtown 점심',
          en: 'Lunch at Eataly Downtown',
        },
        detail: {
          ko: '4 World Trade Center, 3층. 오전 동선 뒤 쉬어가기 좋은 안정적인 점심 포인트입니다.',
          en: 'On the third floor of 4 World Trade Center, a reliable lunch stop after the morning downtown loop.',
        },
        chips: {
          ko: ['실내 점심', '다운타운 리셋'],
          en: ['Indoor lunch', 'Downtown reset'],
        },
      },
      {
        time: '13:45-14:25',
        kind: 'walk',
        place: 'brooklynBridge',
        title: {
          ko: '브루클린 브리지 도보로 건너기',
          en: 'Walk across the Brooklyn Bridge',
        },
        detail: {
          ko: '중간중간 멈춰 사진 찍으며 강변과 스카이라인을 보는 대표 코스입니다.',
          en: 'The classic bridge walk with skyline and river views, plus plenty of photo pauses.',
        },
        chips: {
          ko: ['대표 도보 코스', '스카이라인'],
          en: ['Classic bridge walk', 'Skyline views'],
        },
      },
      {
        time: '14:25-15:10',
        kind: 'stroll',
        place: 'dumbo',
        title: {
          ko: 'DUMBO 짧게 사진 위주로 보기',
          en: 'Quick photo-focused DUMBO stop',
        },
        detail: {
          ko: '브리지 직후 가장 분위기 좋은 포토존만 보고 이동해도 충분한 분량입니다.',
          en: 'After the bridge, a short focused stop in the best photo corners of DUMBO works really well.',
        },
        chips: {
          ko: ['맨해튼 브리지 뷰', '짧고 굵게'],
          en: ['Manhattan Bridge views', 'Short and focused'],
        },
      },
      {
        time: '15:10-16:10',
        kind: 'transfer',
        place: 'nomad',
        title: {
          ko: 'DUMBO에서 NoMad로 이동',
          en: 'Transfer from DUMBO to NoMad',
        },
        detail: {
          ko: '브루클린 쪽 일정을 정리하고 오후 약속 시간에 맞춰 미드타운 남쪽으로 돌아옵니다.',
          en: 'Wrap up Brooklyn and return toward NoMad in time for the late afternoon meet-up.',
        },
        chips: {
          ko: ['브루클린 → 맨해튼', '약속 전 이동'],
          en: ['Brooklyn to Manhattan', 'Transfer before meet-up'],
        },
      },
      {
        time: '16:30-17:30',
        kind: 'meeting',
        place: 'chachamatcha',
        title: {
          ko: 'Cha Cha Matcha NoMad에서 친구 만나기',
          en: 'Meet your friend at Cha Cha Matcha NoMad',
        },
        detail: {
          ko: '1158 Broadway. 평일 7:00-18:00 운영이라 늦기 전에 딱 맞는 타이밍입니다.',
          en: 'At 1158 Broadway. With a weekday close at 6:00 PM, this timing fits comfortably.',
        },
        chips: {
          ko: ['1시간 미팅', 'NoMad'],
          en: ['1-hour meet-up', 'NoMad'],
        },
      },
      {
        time: '16:30-17:30',
        kind: 'park',
        place: 'madisonSquarePark',
        title: {
          ko: '같이 온 친구 2명은 Madison Square Park + Eataly Flatiron 대기',
          en: 'The other two can wait at Madison Square Park + Eataly Flatiron',
        },
        detail: {
          ko: '공원과 실내 공간이 모두 가까워서 날씨나 컨디션에 맞게 쉬기 좋습니다.',
          en: 'A flexible waiting plan with both a park and an indoor food hall close together.',
        },
        chips: {
          ko: ['대기 플랜', '공원 + 실내'],
          en: ['Waiting option', 'Park + indoor backup'],
        },
      },
      {
        time: '17:35-18:15',
        kind: 'meal',
        place: 'eatalyFlatiron',
        title: {
          ko: 'Eataly Flatiron에서 early dinner 또는 snack',
          en: 'Early dinner or snack at Eataly Flatiron',
        },
        detail: {
          ko: '공연 전이라 너무 무겁지 않게 먹고 극장가로 넘어가기 좋은 슬롯입니다.',
          en: 'A good pre-show meal window without making dinner too heavy before Broadway.',
        },
        chips: {
          ko: ['공연 전 식사', 'Flatiron'],
          en: ['Pre-show bite', 'Flatiron'],
        },
      },
      {
        time: '19:00-20:20',
        kind: 'show',
        place: 'lenaHorne',
        title: {
          ko: '브로드웨이 뮤지컬 SIX 관람',
          en: 'Watch SIX on Broadway',
        },
        detail: {
          ko: '수요일 19:00 회차, 러닝타임 80분. 박스오피스 구매 시 handling fee를 아낄 수 있는 점이 핵심입니다.',
          en: 'The Wednesday 7:00 PM performance runs about 80 minutes. Buying in person may save the handling fee.',
        },
        chips: {
          ko: ['19:00 시작', '80분 공연'],
          en: ['7:00 PM curtain', '80-minute show'],
        },
      },
    ],
  },
  {
    id: 'day-3',
    rgb: '182, 128, 42',
    label: { ko: '목요일 3/26', en: 'Thu 3/26' },
    title: {
      ko: '센트럴파크 + Met + Bryant Park + NYPL + Grand Central + SUMMIT',
      en: 'Central Park + The Met + Bryant Park + NYPL + Grand Central + SUMMIT',
    },
    theme: {
      ko: '가장 따뜻한 날이라 공원과 박물관, 미드타운 실내 명소를 한 번에',
      en: 'The warmest day, combining the park, museum, and Midtown interiors',
    },
    events: [
      {
        time: '09:00-10:10',
        kind: 'meal',
        place: 'sarabeths',
        title: {
          ko: "Sarabeth's Central Park South 브런치",
          en: "Brunch at Sarabeth's Central Park South",
        },
        detail: {
          ko: '40 Central Park South. 공원 산책 전에 앉아서 여유 있게 시작하기 좋은 브런치 포인트입니다.',
          en: 'At 40 Central Park South, a great seated brunch start before the long park walk.',
        },
        chips: {
          ko: ['브런치 스타트', '공원 입구 근처'],
          en: ['Brunch start', 'Near the park entrance'],
        },
      },
      {
        time: '10:15-12:30',
        kind: 'park',
        place: 'centralPark',
        title: {
          ko: '센트럴파크 산책',
          en: 'Central Park walk',
        },
        detail: {
          ko: '이번 일정 중 가장 따뜻한 날로 잡고, 공원의 큰 풍경을 여유 있게 즐기는 메인 야외 구간입니다.',
          en: 'This is your warmest day, so it is the best slot for a longer relaxed outdoor walk through the park.',
        },
        chips: {
          ko: ['공원 hours 6:00-1:00', '목요일 메인 야외 일정'],
          en: ['Park hours 6:00 AM-1:00 AM', 'Main outdoor block'],
        },
      },
      {
        time: '12:45-15:30',
        kind: 'museum',
        place: 'met',
        title: {
          ko: 'The Met Fifth Avenue',
          en: 'The Met Fifth Avenue',
        },
        detail: {
          ko: '목요일 운영은 10:00-17:00. adult $30, student $17 기준이고 학생증이 있으면 꼭 챙기는 게 좋습니다.',
          en: 'Thursday hours are 10:00 AM-5:00 PM. Budget $30 for adults or $17 for students, and bring a student ID if you have one.',
        },
        chips: {
          ko: ['adult $30 / student $17', '대형 미술관'],
          en: ['Adult $30 / student $17', 'Major museum stop'],
        },
      },
      {
        time: '16:00-16:25',
        kind: 'park',
        place: 'bryantPark',
        title: {
          ko: 'Bryant Park',
          en: 'Bryant Park',
        },
        detail: {
          ko: 'Met 이후 미드타운으로 돌아와 짧게 바람 쐬기 좋은 포켓 공원 구간입니다.',
          en: 'A short Midtown green break after the museum before going back indoors.',
        },
        chips: {
          ko: ['짧은 쉬어가기', '42nd St 인접'],
          en: ['Quick breather', 'Near 42nd Street'],
        },
      },
      {
        time: '16:25-16:55',
        kind: 'landmark',
        place: 'nypl',
        title: {
          ko: 'NYPL Stephen A. Schwarzman Building',
          en: 'NYPL Stephen A. Schwarzman Building',
        },
        detail: {
          ko: '목요일 10:00-18:00, 마지막 입장은 17:45. 내부 반입 금지인 음료나 물병은 들어가기 전에 정리하는 게 편합니다.',
          en: 'Open Thursday 10:00 AM-6:00 PM with last entry at 5:45 PM. Finish drinks beforehand because food and drinks are not allowed inside.',
        },
        chips: {
          ko: ['마지막 입장 17:45', '실내 조용한 스팟'],
          en: ['Last entry 5:45 PM', 'Quiet interior landmark'],
        },
      },
      {
        time: '17:05-17:30',
        kind: 'stroll',
        place: 'grandCentral',
        title: {
          ko: 'Grand Central Terminal로 도보 이동',
          en: 'Walk over to Grand Central Terminal',
        },
        detail: {
          ko: '뉴욕 특유의 터미널 스케일과 메인 콘코스를 보기 좋은 이동 구간입니다.',
          en: 'A short walk to one of New York’s most iconic transit interiors and its main concourse.',
        },
        chips: {
          ko: ['도보 연결', '메인 콘코스'],
          en: ['Walkable link', 'Main concourse'],
        },
      },
      {
        time: '17:30-18:15',
        kind: 'meal',
        place: 'vanderbiltMarket',
        title: {
          ko: 'Vanderbilt Market에서 간단 저녁',
          en: 'Quick dinner at Vanderbilt Market',
        },
        detail: {
          ko: 'Grand Central과 SUMMIT 사이에 끼워 넣기 좋은 실전형 식사 구간입니다.',
          en: 'A very practical dinner stop placed right between Grand Central and SUMMIT.',
        },
        chips: {
          ko: ['빠른 저녁', 'SUMMIT 직전'],
          en: ['Quick dinner', 'Right before SUMMIT'],
        },
      },
      {
        time: '18:30-20:00',
        kind: 'observation',
        place: 'summit',
        title: {
          ko: 'SUMMIT One Vanderbilt',
          en: 'SUMMIT One Vanderbilt',
        },
        detail: {
          ko: '입구는 Grand Central Main Concourse 쪽. 티켓은 약 $44 + $3 fee부터 보고, 반사 공간 때문에 선글라스와 pants/shorts/tights 권장 메모를 같이 챙기면 좋습니다.',
          en: 'The entrance is by the Grand Central Main Concourse. Ticket pricing starts around $44 plus fee, and the official guidance suggests sunglasses plus pants/shorts/tights.',
        },
        chips: {
          ko: ['약 $47부터', '반사형 전망 경험'],
          en: ['From about $47', 'Immersive mirrored viewpoint'],
        },
      },
    ],
  },
  {
    id: 'day-4',
    rgb: '72, 123, 164',
    label: { ko: '금요일 3/27', en: 'Fri 3/27' },
    title: {
      ko: '체크아웃 + Vessel + High Line + Chelsea Market + EWR',
      en: 'Check-out + Vessel + High Line + Chelsea Market + EWR',
    },
    theme: {
      ko: '체크아웃 후에도 허드슨 야드 쪽을 짧고 효율적으로',
      en: 'A compact, efficient Hudson Yards finish after check-out',
    },
    events: [
      {
        time: '09:00-10:30',
        kind: 'rest',
        place: 'hotel',
        title: {
          ko: '천천히 준비',
          en: 'Slow morning and pack-up',
        },
        detail: {
          ko: '마지막 날은 아침을 무리하지 않고 천천히 정리하면서 시작합니다.',
          en: 'Keep the final morning easy and unrushed while packing up for departure.',
        },
        chips: {
          ko: ['체력 관리', '체크아웃 준비'],
          en: ['Low-stress morning', 'Prep for check-out'],
        },
      },
      {
        time: '11:00',
        kind: 'logistics',
        place: 'hotel',
        title: {
          ko: '체크아웃 후 짐 맡기기',
          en: 'Check out and leave bags at the hotel',
        },
        detail: {
          ko: '11:00 체크아웃 후 짐을 맡겨 두면 허드슨 야드 쪽을 가볍게 보고 다시 돌아오기 좋습니다.',
          en: 'Once you check out at 11:00 AM, leaving the bags makes the final Hudson Yards loop much lighter.',
        },
        chips: {
          ko: ['체크아웃 11:00', '짐보관 $5/가방'],
          en: ['Check-out at 11:00 AM', 'Bag storage $5 per bag'],
        },
      },
      {
        time: '11:20-12:00',
        kind: 'observation',
        place: 'vessel',
        title: {
          ko: 'Vessel',
          en: 'Vessel',
        },
        detail: {
          ko: '오전 11시 이후 입장 가능 기준으로 잡은 첫 스탑. 티켓은 약 $10 + $2 fee입니다.',
          en: 'The first stop after opening, with tickets running about $10 plus a $2 processing fee.',
        },
        chips: {
          ko: ['약 $12', 'Hudson Yards'],
          en: ['About $12', 'Hudson Yards'],
        },
      },
      {
        time: '12:00-12:35',
        kind: 'walk',
        place: 'highLine',
        title: {
          ko: 'High Line 남쪽으로 짧게 걷기',
          en: 'Short southbound walk on the High Line',
        },
        detail: {
          ko: '체크아웃 날이라 길게 욕심내지 않고 Chelsea Market 방향으로 이어지는 만큼만 걷습니다.',
          en: 'Because it is departure day, the walk stays short and focused on the section leading toward Chelsea Market.',
        },
        chips: {
          ko: ['짧은 루프', '도보 연결'],
          en: ['Short loop', 'Walkable connection'],
        },
      },
      {
        time: '12:40-14:00',
        kind: 'meal',
        place: 'chelseaMarket',
        title: {
          ko: 'Chelsea Market 점심',
          en: 'Lunch at Chelsea Market',
        },
        detail: {
          ko: '75 Ninth Ave. 마지막 식사를 유연하게 고르기 좋고, 귀국 전 기념품이나 간단 쇼핑도 같이 보기 편합니다.',
          en: 'At 75 Ninth Ave. It gives you flexible lunch choices plus a little room for snacks or quick last-minute shopping.',
        },
        chips: {
          ko: ['마지막 점심', '실내 푸드홀'],
          en: ['Final lunch', 'Indoor food hall'],
        },
      },
      {
        time: '14:00-14:30',
        kind: 'transfer',
        place: 'hotel',
        title: {
          ko: '호텔 복귀, 짐 찾기',
          en: 'Return to the hotel and collect luggage',
        },
        detail: {
          ko: 'Penn Station 출발 전에 짐을 회수하고 공항 이동 모드로 전환합니다.',
          en: 'Pick up the stored bags and switch fully into airport transfer mode before leaving Penn Station.',
        },
        chips: {
          ko: ['Penn Station 출발 준비', '짐 회수'],
          en: ['Get ready for Penn Station', 'Bag pickup'],
        },
      },
      {
        time: '15:00 이후',
        kind: 'transfer',
        place: 'pennEwrRoute',
        title: {
          ko: 'Penn Station → NJ Transit → Newark Airport Station → AirTrain',
          en: 'Penn Station → NJ Transit → Newark Airport Station → AirTrain',
        },
        detail: {
          ko: '공항역 도착 뒤 터미널까지 15-20분 추가 여유를 두는 구성이 가장 안전합니다. 17:57 EWR 출발 일정에 맞춘 이동 블록입니다.',
          en: 'Allow an extra 15-20 minutes from Newark Airport Station to the terminal via AirTrain. This block is built around the 5:57 PM EWR departure.',
        },
        chips: {
          ko: ['NJ Transit + AirTrain', '17:57 EWR 출발'],
          en: ['NJ Transit + AirTrain', '5:57 PM EWR departure'],
        },
      },
    ],
  },
];

const photoCache = new Map();

function currentCopy() {
  return UI_COPY[state.lang];
}

function getText(value) {
  if (typeof value === 'string') {
    return value;
  }
  return value[state.lang];
}

function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function wikiSummaryUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title.replace(/\s+/g, '_')
  )}`;
}

function looksLikeLogo(imageUrl) {
  return /logo|wordmark|seal/i.test(imageUrl);
}

function renderStaticText() {
  const copy = currentCopy();

  document.documentElement.lang = state.lang === 'ko' ? 'ko' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  const toggle = document.getElementById('languageToggle');
  toggle.textContent = state.lang === 'ko' ? 'English 보기' : 'View in Korean';
}

function renderHeroGlance() {
  const wrap = document.getElementById('heroGlance');
  const cards = currentCopy().glance
    .map(
      (item) => `
        <article class="glance-card">
          <p class="glance-label">${item.label}</p>
          <p class="glance-value">${item.value}</p>
        </article>
      `
    )
    .join('');

  wrap.innerHTML = cards;
}

function renderPanelGrid(targetId, panelItems) {
  const host = document.getElementById(targetId);
  host.innerHTML = panelItems
    .map(
      (panel) => `
        <article class="panel-card">
          <h2>${panel.title}</h2>
          <ul>
            ${panel.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderPanels() {
  renderPanelGrid('essentialsPanel', currentCopy().panels.essentials);
  renderPanelGrid('costsPanel', currentCopy().panels.costs);
}

function renderDayNav() {
  const nav = document.getElementById('dayNav');
  nav.innerHTML = DAYS.map(
    (day) => `
      <a class="day-pill" href="#${day.id}">
        <span>${getText(day.label)}</span>
        <small>${getText(day.title)}</small>
      </a>
    `
  ).join('');
}

function createPlaceholder(photoNode, fallbackText) {
  photoNode.classList.add('placeholder');
  photoNode.textContent = fallbackText;
}

async function fetchPhotoData(photoTitles) {
  const cacheKey = photoTitles.join('|');
  if (photoCache.has(cacheKey)) {
    return photoCache.get(cacheKey);
  }

  const promise = (async () => {
    for (const title of photoTitles) {
      try {
        const response = await fetch(wikiSummaryUrl(title), {
          headers: { accept: 'application/json' },
          cache: 'force-cache',
        });

        if (!response.ok) {
          continue;
        }

        const data = await response.json();
        const image =
          data.originalimage?.source ||
          data.thumbnail?.source ||
          null;

        if (!image || looksLikeLogo(image)) {
          continue;
        }

        return {
          image,
          pageUrl:
            data.content_urls?.desktop?.page ||
            `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/\s+/g, '_'))}`,
        };
      } catch (error) {
        continue;
      }
    }
    return null;
  })();

  photoCache.set(cacheKey, promise);
  return promise;
}

async function hydratePhoto(card, photoTitles, fallbackText) {
  const photoNode = card.querySelector('.event-photo');
  const photoLink = card.querySelector('.photo-link');
  const badge = card.querySelector('.photo-badge');

  createPlaceholder(photoNode, fallbackText);

  const photoData = await fetchPhotoData(photoTitles);
  if (!photoData) {
    photoLink.hidden = true;
    badge.hidden = true;
    return;
  }

  photoNode.classList.remove('placeholder');
  photoNode.textContent = '';
  photoNode.style.backgroundImage = `linear-gradient(180deg, rgba(29,36,51,0.05), rgba(29,36,51,0.18)), url("${photoData.image}")`;

  photoLink.hidden = false;
  photoLink.href = photoData.pageUrl;
  photoLink.textContent = currentCopy().photo;
}

function renderSchedule() {
  const schedule = document.getElementById('schedule');
  const dayTemplate = document.getElementById('daySectionTemplate');
  const eventTemplate = document.getElementById('eventCardTemplate');
  schedule.innerHTML = '';

  DAYS.forEach((day) => {
    const dayNode = dayTemplate.content.firstElementChild.cloneNode(true);
    dayNode.id = day.id;
    dayNode.style.setProperty('--day-rgb', day.rgb);
    dayNode.querySelector('.day-label').textContent = getText(day.label);
    dayNode.querySelector('h2').textContent = getText(day.title);
    dayNode.querySelector('.day-theme').textContent = `${currentCopy().dayThemeLabel}: ${getText(
      day.theme
    )}`;

    const list = dayNode.querySelector('.event-list');

    day.events.forEach((event) => {
      const card = eventTemplate.content.firstElementChild.cloneNode(true);
      const place = PLACES[event.place];
      card.style.setProperty('--day-rgb', day.rgb);

      card.querySelector('.event-time').textContent = event.time;
      card.querySelector('.event-kind').textContent = currentCopy().kinds[event.kind];
      card.querySelector('.event-title').textContent = getText(event.title);
      card.querySelector('.event-location').textContent = getText(place.name);
      card.querySelector('.event-detail').textContent = getText(event.detail);

      const chipsWrap = card.querySelector('.event-chips');
      getText(event.chips).forEach((chip) => {
        const chipNode = document.createElement('span');
        chipNode.className = 'chip';
        chipNode.textContent = chip;
        chipsWrap.appendChild(chipNode);
      });

      const mapsLink = card.querySelector('.maps-link');
      mapsLink.href = googleMapsUrl(place.mapQuery);
      mapsLink.textContent = currentCopy().maps;

      const photoLink = card.querySelector('.photo-link');
      photoLink.hidden = true;
      card.querySelector('.photo-badge').textContent = currentCopy().photoCredit;

      list.appendChild(card);
      hydratePhoto(card, place.photoTitles, getText(event.title));
    });

    schedule.appendChild(dayNode);
  });
}

async function handleShare(event) {
  event.preventDefault();
  const shareButton = document.getElementById('shareButton');
  const shareData = {
    title: document.title,
    text: currentCopy().title,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    const original = currentCopy().share;
    shareButton.textContent = currentCopy().shareDone;
    window.setTimeout(() => {
      shareButton.textContent = original;
    }, 1600);
  } catch (error) {
    window.open(window.location.href, '_blank', 'noopener');
  }
}

function bindEvents() {
  document.getElementById('languageToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('nyc-trip-lang', state.lang);
    renderApp();
  });

  document.getElementById('shareButton').addEventListener('click', handleShare);
}

function renderApp() {
  renderStaticText();
  renderHeroGlance();
  renderPanels();
  renderDayNav();
  renderSchedule();
}

bindEvents();
renderApp();
