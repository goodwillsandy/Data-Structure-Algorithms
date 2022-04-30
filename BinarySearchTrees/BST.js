class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    const node = new Node(value);

    if(!this.root){
      this.root = node;
      return this;
    } else {

      let curr = this.root;

      while(true){
          if(node.val > curr.val){
            // traverse right side 
            if(!curr.right){
              curr.right = node;
              return this;
            }
            curr = curr.right;
          } else {
            // traverse left side
            if(!curr.left){
                curr.left = node;
                return this;
            }
            curr = curr.left;
          }
      }
    }

    return this;
  }

  find(value){
    if(!this.root) return undefined;

    let found = false;
    let curr = this.root;
    while(curr && !found){
      if(value > curr.val){
        // traverse right
        curr = curr.right;
      } else if(value < curr.val) {
        // traverse left
        curr = curr.left;
      } else {
        found = true;
      }
    }
    return found;
  }

  bfs(){
   const toVisit = [this.root]
   const visited = [] 
   while(toVisit.length){
    const node = toVisit.shift();
    if(node.left){
      toVisit.push(node.left.val)
    }
    if(node.right){
      toVisit.push(node.right.val)
    }
    visited.push(node.val);
   }
   return visited;
  }

  dfsPreorder(){
    
  }
}

let tree = new BST();
tree.root = new Node(10);

tree.insert(12);
tree.insert(5);
tree.insert(3);

console.log('bfs',tree.bfs())

console.log('abc')