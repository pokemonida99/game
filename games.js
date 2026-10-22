// 遊戲清單：新增或調整順序只改這裡（陣列順序就是頁面順序）
// feature: true 的放上方大版面；cover 對應 img/cover/<cover>.webp
const GH = 'https://pokemonida99.github.io/';

window.GAMES = [
  {
    id: 'pokemon', repo: 'kanto-pachinko', cover: 'pokemon', feature: 'hub',
    title: '寶可夢彈珠研究所', en: 'POKÉMON PINBALL LAB',
    genre: '收集合集', badge: '13 台機台', accent: '#ffcb05', accent2: '#3d7dca',
    platform: ['手機', '電腦'],
    tagline: '一個大廳、十三台玩法都不一樣的機台。不管在哪一台抓到，全部收進同一本全國圖鑑（1025 隻）。',
    how: [
      '進大廳挑一台，或按「隨便玩一台」讓皮卡丘幫你選',
      '抓到就進圖鑑，同種集滿 3 隻自動進化，閃光大約 1/100',
      '沒有任務、沒有失敗、不用儲值，想玩多久就玩多久',
    ],
    machines: [
      { name: '無印・關都', kind: '柏青哥', path: 'kanto/', poke: 25, c: '#e3350d' },
      { name: '金・銀・城都', kind: '大輪盤柏青哥', path: 'johto/', poke: 249, c: '#c9a227' },
      { name: '紅藍寶石・豐緣', kind: '彈珠台', path: 'hoenn/', poke: 384, c: '#2d9c6b' },
      { name: '鑽石珍珠・神奧', kind: '推幣機', path: 'sinnoh/', poke: 448, c: '#4a6cd4' },
      { name: '黑・白・合眾', kind: '彈珠打磚', path: 'unova/', poke: 643, c: '#6b6b7b' },
      { name: 'X・Y・卡洛斯', kind: '卡包開封', path: 'kalos/', poke: 658, c: '#3a8fd8' },
      { name: '太陽月亮・阿羅拉', kind: '草叢散步', path: 'alola/', poke: 778, c: '#f08c2a' },
      { name: '劍・盾・伽勒爾', kind: 'Plinko 落珠', path: 'galar/', poke: 888, c: '#2f7fd6' },
      { name: '朱・紫・帕底亞', kind: '刮刮樂', path: 'paldea/', poke: 1007, c: '#d94a5a' },
      { name: '釣魚台', kind: '甩竿釣魚', path: 'fishing/', poke: 130, c: '#2a9fd6' },
      { name: '夾娃娃機', kind: '全國 1025 隻', path: 'claw/', poke: 143, c: '#d455a8' },
      { name: 'P 寶可夢 雷光RUSH', kind: '日式數位柏青哥・AI 演出影片', url: GH + 'pachinko-modern/', poke: 145, c: '#f2b705', wide: true },
      { name: '寶可夢小瑪莉', kind: '台灣傳統跑燈機台', url: GH + 'pokemon-little-mary/', poke: 133, c: '#b5651d', wide: true },
    ],
  },
  {
    id: 'huangquan', repo: 'huangquan-puzzle', cover: 'huangquan', feature: true,
    title: '黃泉燒肉店 轉珠', en: 'YELLOW SPRINGS PUZZLE',
    genre: '轉珠 RPG', badge: 'v1.3', accent: '#f0b44c', accent2: '#9b1c1c',
    platform: ['手機優先', '電腦'],
    tagline: '棲渺拾光《黃泉燒肉店》角色的轉珠三消遊戲。50 位角色卡、五章主線，台詞用劇中原句。',
    how: [
      '拖曳符石 5 秒，同色連成三顆以上就消除，combo 越多傷害越高',
      '組隊伍：隊長技、戰友技、主動技能互相搭配，挑戰各章王關',
      '主線五章打到撒旦；托夢照相館、卡片圖鑑可以慢慢收集',
    ],
    note: '粉絲作品',
  },
  {
    id: 'hjaec', repo: 'hjaec-fighter', cover: 'hjaec', feature: true,
    title: '紅分子 亮車快打', en: 'HJAEC SHINE BRAWL',
    genre: '街機動作', badge: 'v2.4', accent: '#ff3b3b', accent2: '#c0c8d8',
    platform: ['手機', '電腦', '手把'],
    tagline: '街機格鬥「打車子」獎勵關反過來玩：不是把車打爛，是把髒車打到發亮。',
    how: [
      '8 位角色、4 關，最後一台是洗到一半會起飛的電動車',
      '站著打車身、蹲著打輪圈、跳起來打車頂，亮度 97% 就是 PERFECT SHINE',
      '集滿紅分子能量，放超必殺「全車鍍膜」',
    ],
  },
  {
    id: 'bullets', repo: 'bullets-fly', cover: 'bullets',
    title: '讓子彈飛：鵝城快打', en: 'GOOSE TOWN BRAWL',
    genre: '橫向清版', badge: '試玩版', accent: '#ff9a3c', accent2: '#2a6f7a',
    platform: ['手機', '電腦', '手把'],
    tagline: '以電影《讓子彈飛》為主軸的街機清版動作，像《吞食天地》《恐龍快打》。',
    how: [
      '八位兄弟可選，每個人打法都不一樣',
      '騎馬劫火車、鴻門宴、散銀子小遊戲，一路打到黃四郎',
      '四種結局，其中三個是隱藏結局',
    ],
    note: '同人作品',
  },
  {
    id: 'office', repo: 'office-idle', cover: 'office',
    title: '不想上班！放置辦公室', en: 'IDLE OFFICE',
    genre: '放置 RPG', badge: 'v1.3', accent: '#ff8a3d', accent2: '#3fa9f5',
    platform: ['手機', '電腦'],
    tagline: '小葵、小米、阿傑和 Vivi 老闆打倒工作怪，帶大家準時下班。',
    how: [
      '點擊打怪、升級辦公室，週一到週五 5 章 50 關',
      '用履歷招募 100 位同事，組 3～5 人隊伍',
      '主線大約 30 分鐘，打完有無限的加班模式',
    ],
  },
  {
    id: 'apocalypse', repo: 'office-apocalypse', cover: 'apocalypse',
    title: '上班啟示錄', en: 'OFFICE APOCALYPSE',
    genre: '3D 經營', badge: '新作', accent: '#ffb23f', accent2: '#e86a8f',
    platform: ['手機直式', '電腦'],
    tagline: '新人小葵報到第一天，什麼雜事都要做：煮咖啡、印文件、補貨、接電話，把破爛茶水間一路升級成產線。',
    how: [
      '拖曳畫面移動，把做好的咖啡、文件背去櫃台賣，再去綠框收錢',
      '踩金色格子升級設施、白色格子開新區域、粉紅格子請同事幫忙',
      '每季業績達標發獎金，全年達標辦尾牙，小葵從實習生升到總監',
    ],
  },
  {
    id: 'banxiu', repo: 'banxiu-game', cover: 'banxiu',
    title: '上班修仙傳', en: 'OFFICE CULTIVATION',
    genre: '放置修仙', badge: 'v2.1', accent: '#e8c56a', accent2: '#3fbf9f',
    platform: ['手機', '電腦'],
    tagline: '練氣不如練肝，飛升不如下班。上班族版的修仙放置遊戲。',
    how: [
      '入職先做「水見式」測驗，決定你的修仙流派',
      '上班累積修為和靈石，心魔太重會走火入魔（過勞）',
      '劇情副本有骰子檢定、劇情分歧和回合制戰鬥',
    ],
  },
  {
    id: 'ux', repo: 'ux-millionaire', cover: 'ux',
    title: 'UX 百萬大富翁', en: 'UX MILLIONAIRE',
    genre: '益智問答', badge: '完整版', accent: '#d36bff', accent2: '#4cc3ff',
    platform: ['手機', '電腦'],
    tagline: '像素風的百萬大富翁，主持人 VIVI 考你 UX 商業思維。',
    how: [
      '連續答對 15 題，獎金從 NT$100 一路到 NT$1,000,000',
      '三種救援：50:50、打電話給同事、問現場觀眾',
      '題目出自《UX 商業價值實現之道》與《真確》，答完有解說',
    ],
  },
  {
    id: 'train', repo: 'shinkansen-math-train', cover: 'train',
    title: '新幹線算數列車', en: 'SHINKANSEN MATH',
    genre: '兒童算數', badge: '4–6 歲', accent: '#3cc47c', accent2: '#ff7aa8',
    platform: ['手機', '平板', '電腦'],
    tagline: '把 10 以內的加法變成「幫列車補車廂」，給學齡前小朋友。',
    how: [
      '三個單元：湊成 10、湊成 5、數車廂加加看',
      '題目會用中文唸出來，還不識字也能自己玩',
      '答對車廂開進月台，集滿 10 顆星星就到站',
    ],
  },
  {
    id: 'sky', repo: 'sky-drift', cover: 'sky',
    title: '天際狂飆', en: 'SKY DRIFT',
    genre: '街機賽車', badge: '原型', accent: '#ff7eb6', accent2: '#7a6cff',
    platform: ['手機', '電腦'],
    tagline: '開在雲端高速公路上的偽 3D 街機賽車，整個遊戲只有一個 HTML 檔。',
    how: [
      '油門自動，← → 轉向、↓ 煞車、↑ 氮氣加速',
      '手機用螢幕上的按鈕操作',
      '小心別衝出天空跑道',
    ],
  },
];

for (const g of window.GAMES) {
  g.url = g.url || GH + g.repo + '/';
  if (g.machines) for (const m of g.machines) m.url = m.url || g.url + m.path;
}
