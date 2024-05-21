
/***
 *    1
 *  2  3
 * 4 5 6 7
 * **/

class Node{
    constructor(key){
        this.left = null
        this.right = null
        this.key = key
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new Node(key)
        if(this.root == null){
            this.root = newNode
        }else{
            this.inOrderTraversNode(this.root, newNode)
        }
    }

    inOrderTraversNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode
            }else{
                this.inOrderTraversNode(node.left, newNode)
            }
        }else{
            if(node.right == null){
                node.right = newNode
            }else{
                this.inOrderTraversNode(node.right, newNode)
            }
        }
    }

    // 前序遍历：根结点 ---> 左子树 ---> 右子树
    preorderTraversal(node){
        if(node !== null){
           console.log(node.key); // 访问根节点
           this.preorderTraversal(node.left)
           this.preorderTraversal(node.right)
        }
    }

    // 中序遍历：左子树---> 根结点 ---> 右子树
    inOrderTraversal(node){
        if(node !== null){
            this.inOrderTraversal(node.left)
            console.log(node.key)
            this.inOrderTraversal(node.right)
        }
    }

    // 后序遍历：左子树 ---> 右子树 ---> 根结点
    postOrderTraversal(node){
        if(node !== null){
            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.key)
        }
    }
}

const binaryTree = new BinaryTree()
let Arr = [20,13,42,7,15,22,57,9,14,21,24]

Arr.map(function(item) {
    binaryTree.insert(item)
})

binaryTree.bfs(binaryTree.root);

