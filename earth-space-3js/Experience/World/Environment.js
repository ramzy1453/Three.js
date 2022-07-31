import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment {

    constructor() {

        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources

        this.setEnvironmentMap()
        this.setSunLight()
    }

    setSunLight() {
        this.ambientLight = new THREE.AmbientLight('white', 0)
        this.scene.add(this.ambientLight)

        this.debug.add(this.ambientLight, 'intensity', 0 , 10 , 0.5)
        

        this.sunLight = new THREE.DirectionalLight('white', 1.4)
        // this.scene.add(new THREE.DirectionalLightHelper(this.sunLight))
        this.sunLight.position.set(72, -6, -10)

        this.debug.add(this.sunLight, 'intensity', 0 , 10 , 0.01)
        this.debug.add(this.sunLight.position, 'x', -100 , 1000 , 0.5)
        this.debug.add(this.sunLight.position, 'y', -100 , 1000 , 0.5)
        this.debug.add(this.sunLight.position, 'z', -100 , 1000 , 0.5)

        this.sunLight.castShadow = true
        this.sunLight.shadow.mapSize.width = 512; // default
        this.sunLight.shadow.mapSize.height = 512; // default
        this.sunLight.shadow.camera.near = 0.5; // default
        this.sunLight.shadow.camera.far = 500; // default
        this.scene.add(this.sunLight)

        this.pl = new THREE.PointLight('white' , 10,100, 1)
        this.scene.add(this.pl)
        // this.scene.add(new THREE.PointLightHelper(this.pl))
        this.pl.position.set(72, -6, -10)
        this.debug.add(this.pl, 'intensity', 0 , 100 , 0.01)
        this.debug.add(this.pl, 'decay', 0 , 100 , 0.01)
        this.debug.add(this.pl, 'distance', 0 , 1000 , 0.01)
        this.debug.add(this.pl.position, 'x', -200 , 200 , 1)
        this.debug.add(this.pl.position, 'y', -200 , 200 , 1)
        this.debug.add(this.pl.position, 'z', -200 , 200 , 1)
    }

    setEnvironmentMap() {
        this.envMap = {}
        this.envMap.intensity = 0.4
        this.envMap.texture = this.ressources.items.spaceEnvMap

        this.envMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.envMap.spaceEnvMap
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