/**
 * 树形结构转数组
*/

function fn(obj, res = []) { // 默认初始结果数组为[]
    // 若元素包含children，则遍历children并递归调用使每一个子元素入栈

   if(obj.children && obj.children.length ){
        for (let index = 0; index < obj.children.length; index++) {
            const item = obj.children[index];
            fn(item, res);
        }
   } 
   res.push({ name: obj.name, id: obj.id, parentId: obj.parentId });  

    // if (obj.children && obj.children.length) {
    //   for(const item of obj.children) {
    //     fn(item, res);
    //   }
    // }else{
    //    res.push(obj);
    // }
    // return res;
}
  
// 示例数据
const tree =  {
    "id": 1,
    "parentId": 0,
    "name": "北京市",
    "children": [
      {
        "id": 12,
        "parentId": 1,
        "name": "朝阳区",
        "children": []
      },
      {
        "id": 13,
        "parentId": 1,
        "name": "昌平区",
        "children": []
      },
      {
        "id": 11,
        "parentId": 1,
        "name": "顺义区",
        "children": []
      }
    ]
  }

let arr = []
fn(tree, arr)
// 转换为数组
console.log( arr )

    