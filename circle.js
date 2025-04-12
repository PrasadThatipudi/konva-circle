// first we need to create a stage
// import { Konva } from "konva";
const createStage = (stageId) =>
  new Konva.Stage({
    container: stageId, // id of container <div>
    width: 500,
    height: 500,
  });

const createCircle = (stage) =>
  new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: "white",
    stroke: "whitesmoke",
    strokeWidth: 4,
  });

const main = () => {
  const stage = createStage("container");
  const layer = new Konva.Layer();

  const circle = createCircle(stage);

  layer.add(circle);
  stage.add(layer);
};

globalThis.addEventListener("DOMContentLoaded", main);
