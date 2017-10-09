const createPromiseCollector = () => {
    const promises = []
    return (promise) => {
        if (!promise) return promises
        promises.push(promise)
        return promise
    }
}

export default createPromiseCollector
