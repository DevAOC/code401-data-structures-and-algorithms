module.exports = function businessTrip(graph, arr) {
  let cost = 0;

  if (arr.length === 1) {
    return `False, $${cost}`;
  }

  const vertices = graph.getNodes();

  for (let i = 0; i < arr.length; i++) {
    const currentCity = vertices.filter((city) => city.value === arr[i])[0];

    if (!currentCity) {
      return `False, $${cost}`;
    }
    const edges = graph.getNeighbors(currentCity);
    const edgeMatch = edges.filter((city) => city.vertex.value === arr[i + 1])[0];

    if (edgeMatch) {
      cost = cost + edgeMatch.weight;
    } else if (i === arr.length - 1) {
      return `True, $${cost}`;
    } else {
      return `False, $${cost}`;
    }
  }
};
