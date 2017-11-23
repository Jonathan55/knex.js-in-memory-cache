module.exports = {

    cache: {},

    load(ttl, db) {
        let key = db.toString()
        if (!this.cache[key] || this.cache[key].validUntil < (+ new Date())) {
            return db.then(data => {
                this.cache[key] = {}
                this.cache[key].validUntil = (+ new Date()) + ttl
                this.cache[key].data = data
                return data
            })
        } else {
            return Promise.resolve(this.cache[key].data)
        }
    }

}
