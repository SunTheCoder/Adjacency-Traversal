/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  // Your code here 

  let queue = [start]
  let visited = new Set().add(start)
  // console.log(visited)
  

  while (queue.length) {

      let currNode = queue.shift()

      // console.log(currNode) //<---printing

      //getneightbors and add to set
      // console.log('Neighbors: ', adjList[currNode])
      for (let num of adjList[currNode]) {
          if (!visited.has(num)) {
            visited.add(num)
            queue.push(num)
          } else if (num === end) {
            return true
          }
      }
      // console.log(queue)
      // console.log(visited)     
    } 
    return false
    
  }

console.log(breadthFirstSearch(1, 3)); // -> true
console.log(breadthFirstSearch(4, 1)); // -> true
console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
