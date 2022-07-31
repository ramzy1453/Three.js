import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment {

    constructor() {

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources

         // this.setEnvironmentMap()
    }

    

    

    setEnvironmentMap() {
        this.envMap = {}
        this.envMap.intensity = 0.4
        this.envMap.texture = this.ressources.items.SkyEnvironmentMap

        this.envMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.envMap.SkyEnvironmentMap
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