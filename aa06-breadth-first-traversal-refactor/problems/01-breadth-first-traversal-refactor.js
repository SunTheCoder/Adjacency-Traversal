/*
The output of your printBreadthFirst function in the Simple Breadth-First
Traversal project is useful for visualizing and debugging the traversal, but now
you need it to output the nodes in the graph in an array instead of printing
them. Refactor your implementation of printBreadthFirst that instead
of printing each node on a newline, the breadthFirstTraversal function adds each
node to a new array and returns the new array.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function breadthFirstTraversal(start) {
  // Your code here 
  let queue = [start]
  let visited = new Set().add(start)
  // console.log(visited)
  let nodes = []

  while (queue.length) {

      let currNode = queue.shift()

      // console.log(currNode) //<---printing
      nodes.push(currNode)

      //getneightbors and add to set
      // console.log('Neighbors: ', adjList[currNode])
      for (let num of adjList[currNode]) {
          if (!visited.has(num)) {
            visited.add(num)
            queue.push(num)
          }         
      }
      // console.log(queue)
      // console.log(visited)     
    } 
    return nodes
}

console.log(breadthFirstTraversal(3)); // [3, 2, 4, 1, 5, 6]
console.log(breadthFirstTraversal(6)); // [6, 4, 3, 5, 2, 1]
console.log(breadthFirstTraversal(4)); // [4, 3, 5, 6, 2, 1]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstTraversal;
