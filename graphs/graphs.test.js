'use strict';

const Graph = require('./graphs.js');

describe('Testing Graph', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    graph.addDirectEdge(A, C);
    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, C);

    expect(graph.size()).toStrictEqual(3);
    expect(graph.breadthFirst(A).has(A)).toBe(true);
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    const output = [{ vertex: { value: 'B' }, weight: 0 }];

    expect(graph.adjacencyList.get(A)).toEqual(output);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    graph.addDirectEdge(A, C);
    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, C);

    expect(graph.getNodes()).toEqual([{ value: 'A' }, { value: 'B' }, { value: 'C' }]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    graph.addDirectEdge(A, C);
    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, C);

    expect(graph.getNeighbors(A)).toEqual([
      { vertex: { value: 'C' }, weight: 0 },
      { vertex: { value: 'B' }, weight: 0 },
    ]);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    graph.addDirectEdge(A, C);
    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, C);

    const neighbors = graph.getNeighbors(A);

    expect(neighbors[0].weight).toBe(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    graph.addDirectEdge(A, C);
    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, C);

    expect(graph.size()).toBe(3);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    graph.addDirectEdge(A, A);

    expect(graph.getNodes()[0]).toEqual({ value: 'A' });
  });

  it('An empty graph properly returns null', () => {
    const graph = new Graph();

    expect(graph.getNodes()).toEqual(null);
  });
});
