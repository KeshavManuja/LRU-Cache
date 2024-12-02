class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache=[]
    }

    getItem(item) {
        return this.cache.indexOf(item)
    }

    setItem(item) {
        const index = this.cache.indexOf(item)
        if(index === -1) {
            if(this.isCacheFull()) {
                this.cache.pop()
                this.cache.unshift(item)
            } else {
                this.cache.unshift(item)
            }
        } else {
            this.cache.splice(index,1)
            this.cache.unshift(item)
        }
    }

    isCacheFull() {
        return this.cache.length == this.capacity
    }
}

const cache = new LRUCache(4)
cache.setItem(10)
cache.setItem(20)
cache.setItem(10)
cache.setItem(30)
cache.setItem(40)
cache.setItem(50)
cache.setItem(30)
cache.setItem(40)
cache.setItem(60)
cache.setItem(30)
