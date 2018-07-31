'use strict';

const BinarySearchTree = require('./bst.js');

const BST = new BinarySearchTree();

const data = [3,1,4,6,9,2,5,7];
data.forEach(each => BST.insert(each));

console.log(BST);