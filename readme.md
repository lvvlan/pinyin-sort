# 汉字拼音首字母排序

以汉字拼音首字母排序

## 安装

```bash
npm install pinyin-sort
```

## 用法

```js
var PYS = require('pinyin-sort')
console.log(PYS(['1我', '不b', 'Z', '知道', '玩', '1']))
//   [ { pinyin: 'b', value: [ '不b' ] },
//     { pinyin: 'w', value: [ '玩' ] },
//     { pinyin: 'z', value: [ 'Z', '知道' ] },
//     { pinyin: '其他', value: [ '1我', '1' ] } ]
```

## 许可证

[MIT](http://hotoo.mit-license.org/)