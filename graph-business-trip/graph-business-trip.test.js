'use strict';

const Graph = require('../graphs/graphs.js');
const businessTrip = require('./graph-business-trip.js');

describe('Testing Graph', () => {
  const graph = new Graph();

  const Pandora = graph.addVertex('Pandora');
  const Metroville = graph.addVertex('Metroville');
  const Arendelle = graph.addVertex('Arendelle');
  const Naboo = graph.addVertex('Naboo');
  const Narnia = graph.addVertex('Narnia');
  const Monstropolis = graph.addVertex('Monstropolis');

  graph.addDirectEdge(Pandora, Arendelle, 150);
  graph.addDirectEdge(Pandora, Metroville, 82);

  graph.addDirectEdge(Arendelle, Pandora, 150);
  graph.addDirectEdge(Arendelle, Metroville, 99);
  graph.addDirectEdge(Arendelle, Monstropolis, 42);

  graph.addDirectEdge(Monstropolis, Arendelle, 42);
  graph.addDirectEdge(Monstropolis, Naboo, 73);
  graph.addDirectEdge(Monstropolis, Metroville, 105);

  graph.addDirectEdge(Naboo, Monstropolis, 73);
  graph.addDirectEdge(Naboo, Metroville, 126);
  graph.addDirectEdge(Naboo, Narnia, 250);

  graph.addDirectEdge(Narnia, Naboo, 250);
  graph.addDirectEdge(Narnia, Metroville, 37);

  graph.addDirectEdge(Metroville, Pandora, 82);
  graph.addDirectEdge(Metroville, Arendelle, 99);
  graph.addDirectEdge(Metroville, Naboo, 26);
  graph.addDirectEdge(Metroville, Narnia, 37);
  graph.addDirectEdge(Metroville, Monstropolis, 105);

  const cityArray1 = ['Metroville', 'Pandora'];
  const cityArray2 = ['Arendelle', 'Monstropolis', 'Naboo'];
  const cityArray3 = ['Naboo', 'Pandora'];
  const cityArray4 = ['Narnia', 'Arendelle', 'Naboo'];

  it('Should return true and price if trip is possible', () => {
    const trip1 = businessTrip(graph, cityArray1);

    expect(trip1).toStrictEqual('True, $82');
  });

  it('Will return false with $0 if trip is not possible', () => {
    const trip3 = businessTrip(graph, cityArray3);
    const trip4 = businessTrip(graph, cityArray4);

    expect(trip3).toStrictEqual('False, $0');
    expect(trip4).toStrictEqual('False, $0');
  });

  it('Can successfully return total cost for a trip with multiple routes', () => {
    const trip2 = businessTrip(graph, cityArray2);

    expect(trip2).toStrictEqual('True, $115');
  });

  it('Will return false with $0 if city array contains one city', () => {
    const trip1 = businessTrip(graph, ['Metroville']);

    expect(trip1).toStrictEqual('False, $0');
  });
});
