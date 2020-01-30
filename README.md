# unique
记录市面上的所有去重复方法(JS)

### 简单去重
>思路:设置一个空对象和一个空的新数组，然后遍历整个数组，如果对象存在则不向新空数组push数据，否则就向空对象添加以这个数组值为key的对象，且push到新数组中，这样最后得到的就是一个已经去除重复的新数组了。

```js
/**
 *@arr 为 [1,2,3,x,x,x,...]
 *输出 [1,2,3,...]
*/
function uniqueEasy(arr){
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
```

### ES6最简洁去重
```js
function uniqueEs6(arr){
    return [...new Set(arr)]
}
```

### 完整版去重
```js
function unique(arr){
    // 判断arr是否为数组
    if(!Array.isArray(arr)){
        return arr
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
```