'use strict';

const BinarySearchTree = require('./bst.js');

const bst = new BinarySearchTree();
const data = [3,1,4,6,8,9,10,12,2,5,7];
// const data = [1,2,3,4,5];
// const data = [3,2,4,1,0];
// const data = [1,0,5,4,10,6];
data.forEach(each => bst.insert(each));

function getHeight(node) {
  if (!node) {
    return 0;
  }
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  return Math.max(left, right) + 1;
}

function isBST(node) {
  if (!node) {
    return;
  }
  if (node.left && node.left.key >= node.key) {
    return false;
  }
  if (node.right && node.right.key <= node.key) {
    return false;
  }
  let leftResult = isBST(node.left);
  let rightResult = isBST(node.right);
  if (leftResult === false || rightResult === false) {
    return false;
  } else {
    return true;
  }
}

// this one does not work properly!!!
function getThirdLargest(node) {
  let largest = _getMax(node);
  if (largest.left && largest.left.key > largest.parent.key) {
    return largest.parent.key;
  } else if (!largest.left) {
    if (largest.parent.right.key > largest.parent.parent.key) {
      return largest.parent.right.key;
    } else {
      return largest.parent.parent.key;
    }
  } else if (!largest.parent.right) {
    return largest.parent.parent.key;
  }
}
function _getMax(node) {
  if (!node.right) {
    return node;
  }
  return _getMax(node.right);
}

function isBalanced(node) {
  if (!node) {
    return 'BST is empty';
  }
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return 'BST is not balanced';
  }
  return 'BST is balanced!';
}

// console.log(bst);
// console.log(getHeight(bst));
// console.log(isBST(bst));
// console.log(getThirdLargest(bst));
// console.log(isBalanced(bst));