# unique
记录市面上的所有去重复方法(JS)

### 简单去重
>思路:设置一个空对象和一个空的新数组，然后遍历整个数组，如果对象存在则不向新空数组push数据，否则就向空对象添加以这个数组值为key的对象，且push到新数组中，这样最后得到的就是一个已经去除重复的新数组了。

### 高级去重