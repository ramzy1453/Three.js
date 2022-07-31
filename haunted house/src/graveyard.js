import * as THREE from 'three'
import { wallsConsts } from './house'

export const graves = new THREE.Group()

const graveGeometry = new THREE.BoxBufferGeometry(1, 0.8, .3)
const graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' })
    //b2b6b1
function drawGraves(rayonRadial, number) {
    const diametre = Math.sqrt(wallsConsts.width ** 2 + wallsConsts.height ** 2)
    for (let i = 0; i < number; i++) {
        const angle = Math.random() * 2 * Math.PI
        const radius = rayonRadial * Math.random() + diametre
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        const grave = new THREE.Mesh(graveGeometry, graveMaterial)
        grave.position.set(x, .3, z)
        grave.rotation.y = (Math.random() - 0.5) * Math.PI * 0.15
        grave.rotation.z = (Math.random() - 0.5) * Math.PI * 0.15
        grave.castShadow = true
        graves.add(grave)
    }
}

drawGraves(10, 100)