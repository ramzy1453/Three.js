import * as THREE from 'three'
import Experience from "./Experience";

export default class Renderer extends THREE.WebGLRenderer {

    constructor({ canvas } = {}) {

        super({ antialias: true, canvas: canvas })

        this.experience = new Experience()

        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.scene = this.experience.scene

        this.setRendererOptions()
    }

    setRendererOptions() {

        this.physicallyCorrectLights = true
        this.outputEncoding = THREE.sRGBEncoding
        this.toneMapping = THREE.ACESFilmicToneMapping
        this.shadowMap.enabled = true
        this.shadowMap.type = THREE.PCFSoftShadowMap
        this.setSize(this.sizes.width, this.sizes.height);
        this.setPixelRatio(this.sizes.pixelRatio);
    }

    resize() {
        this.setSize(this.sizes.width, this.sizes.height);
        this.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        this.render(this.scene, this.camera)
    }

}
