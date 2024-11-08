/*-----------Problem-4-----------*/

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

function calculateShapeArea(s: Circle | Rectangle) {
  if ("shape" in s && "circle" === s.shape) {
    return (Math.PI * s.radius * s.radius).toFixed(2);
  } else if ("shape" in s && s.shape === "rectangle") {
    return s.width * s.height;
  }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
//   console.log(rectangleArea);
