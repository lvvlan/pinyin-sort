var pinyin = require('pinyin')
var pipe = require('./util').pipe

// 1. 获取首字母拼音
const getFirstLetter = (arr) => arr.map((item) => ({
    [/^[a-zA-Z|\u4e00-\u9fa5]/.test(item) ? pinyin(item,{ style: pinyin.STYLE_FIRST_LETTER })[0][0].toLowerCase().charAt(0) : '其他']: [item]
}))
// 2. 合并重复首字母
const letterZip = (arr) => arr.reduce((acc, it) => {
    if (acc[Object.keys(it)[0]]) {
        acc[Object.keys(it)[0]] = acc[Object.keys(it)[0]].concat(Object.values(it)[0])
        return acc
    } else {
        return Object.assign(acc, it)
    }
})
// 3. 字母排序
const letterSort = (json) => Object.keys(json).sort().map((item) => ({
    pinyin: item,
    value: json[item]
}))

module.exports = pipe(getFirstLetter, letterZip, letterSort)
