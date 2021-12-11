'use strict';

const Graph = require('./graph-depth-first.js');

describe('Testing Graph', () => {
  it('Can traverse graph depth first in pre-order', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const G = graph.addVertex('G');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    const F = graph.addVertex('F');
    const H = graph.addVertex('H');

    graph.addDirectEdge(A, B);
    graph.addDirectEdge(B, A);
    graph.addDirectEdge(A, D);
    graph.addDirectEdge(D, A);
    graph.addDirectEdge(B, C);
    graph.addDirectEdge(C, B);
    graph.addDirectEdge(C, G);
    graph.addDirectEdge(B, D);
    graph.addDirectEdge(D, B);
    graph.addDirectEdge(D, E);
    graph.addDirectEdge(D, H);
    graph.addDirectEdge(D, F);

    expect(graph.depthTraversal(A)).toEqual(graph.vertices);
  });
});
