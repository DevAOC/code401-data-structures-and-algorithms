'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  addVertex(value) {
    const payload = new Vertex(value);
    this.adjacencyList.set(payload, []);
    this.vertices.add(payload);
    return payload;
  }

  addDirectEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex Error');
    }
    const neighbors = this.adjacencyList.get(startVertex);
    const newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('getNeighbor error: invalid vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();
      const neighbors = this.getNeighbors(current);

      for (const edge of neighbors) {
        const neighbor = edge.vertex;
        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }
    return visitedNodes;
  }

  getNodes() {
    const nodes = [];
    this.adjacencyList.forEach((value, key) => {
      nodes.push(key);
    });
    if (nodes.length === 0) return null;

    return nodes;
  }

  size() {
    return this.vertices.size;
  }
}

module.exports = Graph;
