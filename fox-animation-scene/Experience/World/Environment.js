import { GUI } from 'dat.gui';
import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment {

    constructor() {

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources
        this.setSunLight()
        this.setEnvironmentMap()

    }

    setSunLight() {
        this.ambientLight = new THREE.AmbientLight('white', 0.5)
        this.scene.add(this.ambientLight)

        this.sunLight = new THREE.DirectionalLight('white', 3.5)
        this.sunLight.position.set(4.2, 1.5, -1.25)
        this.sunLight.castShadow = true
        this.sunLight.shadow.mapSize.width = 512; // default
        this.sunLight.shadow.mapSize.height = 512; // default
        this.sunLight.shadow.camera.near = 0.5; // default
        this.sunLight.shadow.camera.far = 500; // default
        this.scene.add(this.sunLight)
    }
    setEnvironmentMap() {
        this.envMap = {}
        this.envMap.intensity = 0.4
        this.envMap.texture = this.ressources.items.environmentMapsTexture
        this.envMap.encoding = THREE.sRGBEncoding

        this.scene.environment = this.envMap.texture
        this.scene.background = this.envMap.texture

        this.envMap.updateMaterials = () => {
            this.scene.traverse((object) => {
                if (object instanceof THREE.Mesh && object.material instanceof THREE.MeshStandardMaterial) {
                    object.castShadow = true
                    object.material.envMapIntensity = this.envMap.intensity
                    object.material.needsUpdate = true
                }
            })
        }
        this.envMap.updateMaterials()


    }
}