import * as THREE from 'three'
import { house } from './house'

const radius = 1
const bushGeometry = new THREE.SphereBufferGeometry(radius, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })


export const groupBushes = new THREE.Group()
    //g.g
const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.position.set(-4, -2.5, 4)
bush1.scale.set(0.7, 0.7, 0.7)
    //g-d
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.position.set(-2.5, -2.5, 4)

//p.g
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.position.set(2.5, -2.5, 4)
bush3.scale.set(1.1, 1.1, 1.1)

//petit.a droite
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.position.set(4, -2.5, 4)
bush4.scale.set(0.8, 0.8, 0.8)
house.add(bush1, bush2, bush3, bush4)

bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true
bush4.castShadow = true