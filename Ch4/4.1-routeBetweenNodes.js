// given a directed graph, find the distance between two nodes


// BFS
// Time: O(E) || Space: O(N), E= edges
function isRouteBFS (graph, start, end) {
    let discoveredNodes = new Set();
    let queue = [start];

    while (queue.length > 0) {
        // remove the first value- which is the first neighbor node
        let node = queue.shift();
        for (let neighbor of graph[node]) {
            if (!discoveredNodes.has(neighbor)) {
                if (neighbor === end) return true;
                discoveredNodes.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return false;
}

// DFS
// Time: O(E) || Space: O(N), E= edges
function isRouteDFS (graph, start, end) {
    return DFS(graph, new Set(), start, end);
}

function DFS (graph, discoveredNodes, start, end) {
    if (start === end) {
        return true;
    }
    discoveredNodes.add(start);
    for (let neighbor of graph[start]) {
        if (!discoveredNodes.has(neighbor)) {
            if (DFS(graph, discovered, neighbor, end)) {
                return true;
            }
        }
    }
    return false;
}