import * as PIXI from "pixi.js";

const createApp = () => {
  const app = new PIXI.Application({
    backgroundColor: 0xcccccc,
    resizeTo: window,
  });
  document.body.appendChild(app.view);
  return app;
};

const app = createApp();