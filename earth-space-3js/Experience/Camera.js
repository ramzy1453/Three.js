import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from "./Experience";

export default class Camera extends THREE.PerspectiveCamera {

    constructor() {

        super(35, 2, 0.1, 1000)

        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setCamera()
        this.setOrbitControls()

        // CameraGroup
        this.cameraGroup = new THREE.Group()
        this.cameraGroup.add(this)
        this.scene.add(this.cameraGroup)

    }
    setCamera() {
        this.resize()
        this.position.set(5, 5, 100)
    }
    setOrbitControls() {
        this.controls = new OrbitControls(this, this.canvas)
        this.controls.enableDamping = true
    }
    resize() {
        this.aspect = this.sizes.width / this.sizes.height
        this.updateProjectionMatrix()
    }
    update() {
        this.controls.update()
    }

}