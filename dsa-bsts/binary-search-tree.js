class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
      // Tree is empty, need to insert at the root of the tree
      const newNode = new Node(val);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      // else, insert in rigth spot in the tree
      let current_node = this.root;
      while(true){
          if(val < current_node.val){
              if(current_node.left === null){
                  current_node.left = new Node(val);
                  return this;
              }else{
                  current_node = current_node.left;
              }

          }else if(val > current_node.val){
              if(current_node.right = newNode);
              return this;
          }else{
              current_node = current_node.right;
          }
      }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
      let currnet_node = this.root;
      let isFound = false;
      
      if(val === current_node.val){
          return current_node;
      }
      while(current_node && !isFound){
          if(val < current_node.val){
              current_node = current_node.left;
          } else if(val > current_node.val){
              currnet_node = current_node.right;
          }else{
              isFound = true;
          }
      }
      if(!isFound){
          return undefined;
        
      }else{
          return current_node;
      }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
      let data = [];
      let current = this.root;

      function traverse(node){
          data.push(node.val);
          node.left && traverse(node.left);
          node.right && traverse(node.right);
      }
      traverse(current_node);
      return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
      let data = [];
      let current_node = this.root;

      function traverse(node){
          node.left && traverse(node.left);
          data.push(node.val);
          node.right && traverse(node.right);
      }
      traverse(current_node);
      return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
      let data = [];
      let current_node = this.root;

      function traverse(node){
          node.left && traverse(node.left);
          node.rigth && traverse(node.right);
          data.push(node.val);
      }
      traverse(current_node);
      return data;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while(queue.length){
        node = queue.shift();
        data.push(node.val);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(ndoe.right);
        }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
