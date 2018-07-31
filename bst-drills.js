'use strict';

const BinarySearchTree = require('./bst.js');

const BST = new BinarySearchTree();
const BST2 = new BinarySearchTree();


const data = [3,1,4,6,8,9,10,12,2,5,7];
data.forEach(each => BST.insert(each));


// console.log(BST);s
// console.log(getHeight(BST));
console.log(isSearchTree(BST));

function getHeight(node) {
  if(!node) {
    return 0;
  }
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  return Math.max(left, right) + 1;
}

function isSearchTree(node){

  if(!node){
    return;
  }
  if(node.left && node.left.key >= node.key){
    return false;
  }
  if(node.right && node.right.key<= node.key){
    return false;
  }
  let leftResult= isSearchTree(node.left);
  let rightResult= isSearchTree(node.right);
  if(leftResult===false || rightResult===false){
    return false;
  }
  else{return true;}
}




