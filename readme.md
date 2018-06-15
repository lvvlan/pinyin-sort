# 汉字拼音首字母排序

以汉字拼音首字母排序

[![npm](https://img.shields.io/badge/npm-0.1.1-orange.svg)](https://www.npmjs.com/package/pinyin-sort)

## 安装

```bash
npm install pinyin-sort
```

## 用法

```js
import PYS from 'pinyin-sort'
console.log(PYS(['1我', '不b', 'Z', '知道', '玩', '1']))
//   [ { pinyin: 'b', value: [ '不b' ] },
//     { pinyin: 'w', value: [ '玩' ] },
//     { pinyin: 'z', value: [ 'Z', '知道' ] },
//     { pinyin: '其他', value: [ '1我', '1' ] } ]
```

## 许可证

[MIT](http://hotoo.mit-license.org/)