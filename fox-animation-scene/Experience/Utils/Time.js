import { EventEmitter } from 'events'

export default class Time extends EventEmitter {

    constructor() {
        super()
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        requestAnimationFrame(() => this.tick())
    }

    tick() {

        const curentTime = Date.now()
        this.delta = curentTime - this.current
        this.current = curentTime
        this.elapsed += this.delta

        this.emit('tick')

        requestAnimationFrame(() => this.tick())

    }
}