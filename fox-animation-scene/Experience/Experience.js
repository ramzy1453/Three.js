import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Ressources from './Utils/Ressources'
import Debug from './Utils/Debug'
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
        console.log('Welcome to the game!')
        
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.ressources = new Ressources({ assets })
            .on('ready', () => this.world = new World())

        //Sizes resize event
        this.sizes.on('resize', () => this.resize())

        //Time tick event
        this.time.on('tick', () => this.update())

    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
    update() {

        this.camera.update()
        if (this.world) {
            this.world.update()
        }
        this.renderer.update()
    }

}
