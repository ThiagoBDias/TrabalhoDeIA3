function calc() {
  var larguraUsu = parseFloat(document.getElementById('largura').value);
  var nucleoUsu = parseFloat(document.getElementById('nucleo').value);
  var comprimentoUsu = parseFloat(document.getElementById('comprimento').value);

  const normalizeMinMax = (numero, minValue, maxValue) => {
    return (numero - minValue) / (maxValue - minValue);
  };

  const normalize = (numero, min, max) => {
    return normalizeMinMax(numero, min, max).toFixed(3);
  };

  const euclideanDistance = (x1, y1, z1, x2, y2, z2, x3, y3, z3) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const deltaZ = z2 - z1;
    const deltaA = x3 - x1;
    const deltaB = y3 - y1;
    const deltaC = z3 - z1;
    return Math.sqrt(
      Math.pow(deltaX, 2) +
      Math.pow(deltaY, 2) +
      Math.pow(deltaZ, 2) +
      Math.pow(deltaA, 2) +
      Math.pow(deltaB, 2) +
      Math.pow(deltaC, 2)
    );
  };

  const largura = normalize(larguraUsu, 2.909, 3.594);
  const comprimento = normalize(comprimentoUsu, 5.236, 6.037);
  const nucleo = normalize(nucleoUsu, 5.003, 5.88);

  const clusters = [
    { x: 0, y: 0.0000578403091693468, z: 0.705250436417349 },
    { x: 0.0000451450615431792, y: 4.42091535052323, z: 0.73361756411978 },
    { x: 0.0000767099013213372, y: 6.63137302578506, z: 0.77239156707399 },
    { x: 0.0000150483538477264, y: 0.0000703662359958297, z: 0.75040284678394 },
    { x: 0.0000515681394050138, y: 0, z: 0.754767020276622 },
    { x: 0.0000695527574181502, y: 4.05250573797976, z: 0.770880891634215 },
    { x: 0.0000346846204539061, y: 0.0000165784325644625, z: 0.732442594333289 },
    { x: 0.0000269769270197048, y: 1, z: 0.747381495904391 },
    { x: 0.0000781780334040423, y: 0.0000261570824905963, z: 0.7671881294481 },
  ];

  const distances = clusters.map((cluster) => {
    const distance = euclideanDistance(
      largura,
      comprimento,
      nucleo,
      cluster.x,
      cluster.y,
      cluster.z
    );

    return distance;
  });

  const menor = Math.min.apply(Math, distances);

  const clustersNames = ["Grupo1", "Grupo2", "Grupo3"];
  console.log(menor);

  const clusterIndex = distances.findIndex((distance) => distance == menor);

  if (clusterIndex >= 0) {
    console.log(`Cluster ${clusterIndex}: ${clustersNames[clusterIndex]}`);
  }
}
