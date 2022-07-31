import { EventEmitter } from 'events'

export default class Sizes extends EventEmitter {

    constructor() {
        super()
            // Sizes
        this.width = innerWidth
        this.height = innerHeight
        this.pixelRatio = Math.min(devicePixelRatio, 2)
            // Event Resizing
        addEventListener('resize', () => {
            this.width = innerWidth
            this.height = innerHeight
            this.pixelRatio = Math.min(devicePixelRatio, 2)

            // Emit event
            this.emit('resize')
        })


    }
}