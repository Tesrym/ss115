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

/**
 * Corners
 */
const upperLeft = new PIXI.Graphics()
  .beginFill(0xff0000)
  .drawRect(0, 0, 100, 100);

const upperRight = new PIXI.Graphics()
  .beginFill(0xff0000)
  .drawRect(0, 0, 100, 100);

const bottomLeft = new PIXI.Graphics()
  .beginFill(0xff0000)
  .drawRect(0, 0, 100, 100);

const bottomRight = new PIXI.Graphics()
  .beginFill(0xff0000)
  .drawRect(0, 0, 100, 100);

app.stage.addChild(upperLeft);
app.stage.addChild(upperRight);
app.stage.addChild(bottomLeft);
app.stage.addChild(bottomRight);

window.addEventListener("resize", resize);

function resize() {
  const parent = app.view.parentNode as Element;
  app.renderer.resize(parent.clientWidth, parent.clientHeight);
  //upperLeft no need to touch
  upperRight.position.set(app.screen.width - 100, 0);
  bottomLeft.position.set(0, app.screen.height - 100);
  bottomRight.position.set(app.screen.width - 100, app.screen.height - 100);
}

resize();
