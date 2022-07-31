import * as THREE from 'three'
import Experience from '../Experience'

export default class Particles {
    constructor(distance){

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.particleCount = 400
        this.positions = new Float32Array(this.particleCount * 3)

        for(let index = 0 ; index < this.particleCount ; index++){
            this.positions[index * 3 + 0] = (Math.random() - 0.5) * 100
            this.positions[index * 3 + 1] = distance / 2 - Math.random()*innerHeight
            this.positions[index * 3 + 2] = (Math.random() - 0.5) * 100
        }

        this.particleGeometry = new THREE.BufferGeometry()
        this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))

        this.particleMaterial = new THREE.PointsMaterial({
            color : 'white',
            sizeAttenuation : true,
            size: 1
        })

        this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial)
        this.scene.add(this.particles)

    }
  
}