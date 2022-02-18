// PixiJSを読み込み
import * as PIXI from "pixi.js";

// ステージを作る
const createApp = () => {
  // キャンバスサイズと背景色を指定してステージを作成
  const app = new PIXI.Application({
    backgroundColor: 0xcccccc, // 背景色(= #cccccc),
    resizeTo: window
  });
  document.body.appendChild(app.view);
  return app;
};

const app = createApp();