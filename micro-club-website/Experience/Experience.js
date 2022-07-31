import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Ressources from './Utils/Ressources'
import assets from './Utils/Assets'

let instance = null

export default class Experience {

    constructor({ canvas } = {}) {
        // Singleton
        if (instance) {
            return instance
        }
        instance = this
        // Canvas
        window.experience = this
        this.canvas = canvas
    }

    launch() {
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer({ canvas: this.canvas })
        this.ressources = new Ressources({ assets })
            .on('ready', () => this.world = new World())

        //Sizes resize event
        this.sizes.on('resize', () => this.resize())

        //Time tick event
        this.time.on('tick', () => this.update())

        // Scroll event
        addEventListener('scroll' , () => this.scroll())

        // Mousemove
        addEventListener('mousemove' , e => this.mousemove(e))

    }

    mousemove(e){
        this.world && this.world.mousemove(e)
    }

    scroll(){
        this.world && this.world.scroll()
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
    update() {
        this.camera.update()
        this.world && this.world.update()
        this.renderer.update()
    }
    

}
