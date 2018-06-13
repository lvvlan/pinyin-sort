module.exports = {
    pipe: (...args) => (value) => args.reduce((acc, it) => it(acc), value)
}