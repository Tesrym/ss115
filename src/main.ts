import * as PIXI from "pixi.js";

//Make devtools see
(window as any).PIXI = PIXI;

const createApp = () => {
  const app = new PIXI.Application({
    backgroundColor: 0xcccccc,
    resizeTo: window,
  });
  document.body.appendChild(app.view);
  return app;
};

const app = createApp();

import { testRender } from "./renderTest";
testRender(app);
