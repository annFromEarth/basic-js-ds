const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rooty = null;
  }

  root() {
    return this.rooty;
  }

  add(data) {

    const { Node } = require('../extensions/list-tree.js');

    this.rooty = addToBinaryTree(this.rooty, data);

    function addToBinaryTree (node, data) {

      if (!node){
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addToBinaryTree(node.left, data);
      } else {

        node.right = addToBinaryTree(node.right, data);
      }  

      return node;
    }
  }


  has(data) {

    return search_WIthinBinaryTree(this.rooty, data);

    function search_WIthinBinaryTree(node, data) {
      
    if (!node){
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return data < node.data ?
    search_WIthinBinaryTree(node.left, data):
    search_WIthinBinaryTree(node.right, data);

    }
  }

  find(data) {
    
    return searchNode_WIthinBinaryTree(this.rooty, data);

    function searchNode_WIthinBinaryTree(node, data) {
      
    if (!node){
      return null;
    }

    if (node.data === data) {
      return node;
    }

    return data < node.data ?
    searchNode_WIthinBinaryTree(node.left, data):
    searchNode_WIthinBinaryTree(node.right, data);

    }
  }


  remove(data) {

    this.rooty = removeNode(this.rooty,data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        //left child node doesn't exist
        if (!node.left) {
          node = node.right;
          return node;
        }
        //right child node doesn't exist
        if (!node.right) {
          node = node.left;
          return  node;
        }

        //both left & right children exist
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight=minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode (node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {

    if (!this.rooty) {
      return;
    }

    let min_node = this.rooty;
    while (min_node.left) {
      min_node = min_node.left;
    }

    return min_node.data;
  }

  max() {

    if (!this.rooty) {
      return;
    }

    let max_node = this.rooty;
    while (max_node.right) {
      max_node = max_node.right;
    }

    return max_node.data;
  }
}

module.exports = {
  BinarySearchTree
};