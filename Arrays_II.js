function optimalLocation(coord) {
  var avgx = 0;
  var avgy = 0;
  for (var i = 0; i < coord.length; i++) {
    avgx = avgx + coord[i][0];
    avgy = avgy + coord[i][1];
  }
  avgx = avgx / coord.length;
  avgy = avgy / coord.length;
  coord = [Math.round(avgx), Math.round(avgy)];
  console.log(coord);
  return coord;
}
optimalLocation([
  [2, 5],
  [10, 10],
  [-5, -18],
  [-10, 5],
]);
optimalLocation([
  [1, 25],
  [-53, 2],
  [5, 2],
  [14, -30],
  [-12, 20],
  [-58, 12],
]);
optimalLocation([
  [1, 1],
  [1, 1],
]);
