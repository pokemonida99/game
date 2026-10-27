# 遊戲入口｜AI 製作・網頁遊戲作品展

所有網頁遊戲的入口頁：https://pokemonida99.github.io/game/

- `games.js`：系列（`SERIES`）與遊戲清單（`GAMES`：系列、介紹、怎麼玩、連結）。頁面依系列分區，新增或調整順序只改這裡。
- `img/cover/`：各遊戲封面。有分享縮圖（og:image）的遊戲直接用縮圖，圖上本來就有標題字的標 `coverText: true`；其他是 GPT 主視覺或遊戲畫面。
- `img/poke/`：寶可夢彈珠研究所封面與機台列表用的小圖（取自 kanto-pachinko）。
- `img/og.jpg`：分享連結時的預覽圖。

本機預覽：`python3 -m http.server 4520`
