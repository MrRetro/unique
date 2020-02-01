# unique
记录市面上的所有去重复方法(JS)

### 1.简单去重
>思路:设置一个空对象和一个空的新数组， 遍历整个数组，如果对象存在则不向新空数组push数据，否则就向空对象添加以这个数组值为key的对象，且push到新数组中，这样最后得到的就是一个已经去除重复的新数组了。

```js
/**
 *@arr 为 [1,2,3,x,x,x,...]
 *输出 [1,2,3,...]
*/
function uniqueEasy(arr){
    // 判断arr是否为数组
    if(!Array.isArray(arr)){
        console.log('type error!')
        return
    }
    let list = []
    let obj = {}
    arr.forEach(v=>{
        if(!obj[v]){
            obj[v] = true
            list.push(v)
        }
    })
    return list
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueEasy(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, Array(0), Array(1), ƒ, Sat Feb 01 2020 16:31:20 GMT+0800 (中国标准时间), Symbol(), Symbol()] // {}与{a:1}都变成了第一个对象{},Symbol判断不了
```

### 2.ES6最简洁去重
>无法去掉“{}”空对象
```js
function uniqueEs6(arr){
    return [...new Set(arr)]
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueEs6(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 16:27:20 GMT+0800 (中国标准时间), Sat Feb 01 2020 16:27:20 GMT+0800 (中国标准时间), Symbol(), Symbol()] // 对象、数组、函数、时间、Symbol都判断不了
```

### 3.filter + indexOf 去重
>思路:遍历数组后过滤出索引等于第一次出现的索引  
无法去掉重复的“{}”空对象,因为 arr.indexOf({}) 找不到
```js
function uniqueFilter(arr){
    return arr.filter((el,i,oldArr)=>oldArr.indexOf(el)===i)
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueFilter(arr))
// [1, true, false, "string", undefined, null, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 16:37:36 GMT+0800 (中国标准时间), Sat Feb 01 2020 16:37:36 GMT+0800 (中国标准时间), Symbol(), Symbol()] // 对象、数组、函数、时间、Symbol都判断不了
``` 

### 4.reduce + includes去重
```js
function uniqueReduce(arr){
 return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueReduce(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 19:02:39 GMT+0800 (中国标准时间), Sat Feb 01 2020 19:02:39 GMT+0800 (中国标准时间), Symbol(), Symbol()] // 对象、数组、函数、时间、Symbol都判断不了
```

### 5.for嵌套for + splice 去重(ES5)
>该方法也无法去掉重复的“{}”空对象
```js
function uniqueEs5(arr){ 
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueEs5(arr))
// [1, true, false, "string", undefined, null, NaN, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 16:43:04 GMT+0800 (中国标准时间), Sat Feb 01 2020 16:43:04 GMT+0800 (中国标准时间), Symbol(), Symbol()] // NaN、对象、数组、函数、时间、Symbol都判断不了
```

### 6.indexOf去重
```js
function uniqueIndexOf(arr) {
 if (!Array.isArray(arr)) {
     console.log('type error!')
     return
 }
let array = [];
 for (let i = 0; i < arr.length; i++) {
     if (array.indexOf(arr[i]) === -1) {
        array.push(arr[i])
     }
 }
 return array;
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueIndexOf(arr))
// [1, true, false, "string", undefined, null, NaN, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 16:45:44 GMT+0800 (中国标准时间), Sat Feb 01 2020 16:45:44 GMT+0800 (中国标准时间), Symbol(), Symbol()] // NaN、对象、数组、函数、时间、Symbol都判断不了
```

### 7.sort去重
```js
function uniqueSort(arr) {
 if (!Array.isArray(arr)) {
    console.log('type error!')
    return;
 }
 arr = arr.sort()
 let arrry= [arr[0]];
 for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
        arrry.push(arr[i]);
    }
 }
 return arrry;
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date()]
console.log(uniqueSort(arr))
// [Array(0), Array(0), Array(1), Array(1), 1, NaN, NaN, Sat Feb 01 2020 17:14:26 GMT+0800 (中国标准时间), Sat Feb 01 2020 17:14:26 GMT+0800 (中国标准时间), {…}, {…}, {…}, {…}, false, ƒ, ƒ, null, "string", true, undefined] // NaN、对象、数组、函数、时间都判断不了
```

### 8.includes去重
```js
function uniqueIncludes(arr) {
 if (!Array.isArray(arr)) {
    console.log('type error!')
    return
 }
 let array =[];
 for(let i = 0; i < arr.length; i++) {
    if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
        array.push(arr[i]);
    }
 }
 return array
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueIncludes(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 17:32:46 GMT+0800 (中国标准时间), Sat Feb 01 2020 17:32:46 GMT+0800 (中国标准时间), Symbol(), Symbol()] // 对象、数组、函数、时间、Symbol都判断不了
```

### 9.hasOwnProperty去重
```js
function uniqueHasOwnProperty(arr) {
 let obj = {};
 return arr.filter(function(item, index, arr){
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
 })
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date()]
console.log(uniqueHasOwnProperty(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, Array(0), Array(1), ƒ, Sat Feb 01 2020 17:43:39 GMT+0800 (中国标准时间)] // 对象判断不了
```

### 10.递归去重
>升序->从最后一个开始向前对比，如果出现重复就删除
```js
function uniqueLoop(arr) {
 let array= arr;
 let len = array.length;
 
 array.sort(function(a,b){ // 排序后更加方便去重
    return a - b;
 })
 
 function loop(index){
    if(index >= 1){
        if(array[index] === array[index-1]){
            array.splice(index,1);
        }
        loop(index - 1); // 递归loop，然后数组去重
    }
 }
 loop(len-1);
 return array;
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date()]
console.log(uniqueLoop(arr))
// [false, null, 1, true, "string", NaN, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 18:41:15 GMT+0800 (中国标准时间), Sat Feb 01 2020 18:41:15 GMT+0800 (中国标准时间), undefined] // NaN、对象、数组、函数、时间都判断不了
```

### 11.Map去重
```js
function uniqueMap(arr) {
 let map = new Map();
 let array = new Array(); // 数组用于返回结果
 for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) { // 如果有该key值
        map.set(arr[i], true); 
    } else { 
        map.set(arr[i], false); // 如果没有该key值
        array.push(arr[i]);
    }
 } 
 return array ;
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueMap(arr))
// [1, true, false, "string", undefined, null, NaN, {…}, {…}, {…}, {…}, Array(0), Array(0), Array(1), Array(1), ƒ, ƒ, Sat Feb 01 2020 18:55:44 GMT+0800 (中国标准时间), Sat Feb 01 2020 18:55:44 GMT+0800 (中国标准时间), Symbol(), Symbol()] // 对象、数组、函数、时间、Symbol都判断不了
```

### 12.完整版去重
```js
// 输入 [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
// 输出 [1,true,false,'string',undefined,null, NaN,{},{a:1},[],[0],function(){}, Sat Feb 01 2020 18:55:44 GMT+0800 (中国标准时间),Symbol()]
```
>要怎么做呢？  

<details>
<summary>展开查看</summary>
<pre>
function unique(arr){
    // 判断arr是否为数组
    if(!Array.isArray(arr)){
        console.log('type error!')
        return
    }
    let list = []
    let obj = {}
    let isUnique = false // 是否唯一
    let type = '' // 元素类型
    let item = null // 新元素项
    arr.forEach(v=>{
        temp = ''
        type = Object.prototype.toString.call(v)
        switch(type){
            case '[object Object]':
                // 对象 对象不能做为对象的key值
                item = '[object Object]' + JSON.stringify(v)
                isUnique = obj[item]
                break;
            case '[object Symbol]':
                // Symbol Symbol不能隐式转String
                item = '[object Symbol]' + v.toString()
                isUnique = obj[item]
                break;
            default:
                item = v
                isUnique = obj[v]
        }
        if(!isUnique){
            obj[item] = true
            list.push(v)
        }
    })
    return list
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(unique(arr))
</pre>
</details>