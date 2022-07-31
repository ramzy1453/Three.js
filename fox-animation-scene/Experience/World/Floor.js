import * as THREE from 'three'
import Experience from '../Experience'
export default class Floor {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources.items

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }
    setGeometry() {
        this.geometry = new THREE.CylinderBufferGeometry(50, 50, 10)
    }
    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            color: 'white',
            normalMap: this.textures.normal,
            map: this.textures.color,
        })
    }
    setTextures() {
        this.textures = {}

        // Color
        this.textures.color = this.ressources.grassColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(10, 10)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        // Normal
        this.textures.normal = this.ressources.grassNormalTexture
        this.textures.normal.encoding = THREE.sRGBEncoding
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }
    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.frustumCulled = false
        this.scene.add(this.mesh)
        this.mesh.receiveShadow = true
    }
}
