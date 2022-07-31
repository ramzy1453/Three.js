import * as THREE from 'three'
import { scene } from '.'
import { bricksAmbientOcclusionTexture, bricksColorTexture, bricksNormalTexture, bricksRoughnessTexture, doorAlphaTexture, doorAmbientOcclusionTexture, doorColorTexture, doorHeightTexture, doorMetalnessTexture, doorNormalTexture, doorRoughnessTexture, grassAmbientOcclusionTexture, grassColorTexture, grassNormalTexture, grassRoughnessTexture } from './textures'

export const house = new THREE.Group()

export const wallsConsts = { depth: 6, width: 8, height: 6 }
const roofConsts = { height: 2.5, radius: 6.25 }
const doorConsts = { width: 5, height: 4.5 }

//walls
const walls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(wallsConsts.width, wallsConsts.height, wallsConsts.depth),
    new THREE.MeshStandardMaterial({
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture
    })
)
walls.geometry.setAttribute('uv2',
    new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
)
walls.castShadow = true
house.position.y += wallsConsts.depth / 2
house.add(walls)

///roof
const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(roofConsts.radius, roofConsts.height, 4),
    new THREE.MeshStandardMaterial({
        color: '#b35f45'
    })
)
roof.position.y = wallsConsts.depth / 2 + roofConsts.height / 2
roof.rotation.y = Math.PI / 4
house.add(roof)

//door
const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(doorConsts.width, doorConsts.height, 100, 100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.5,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
)
door.geometry.setAttribute('uv2',
    new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
)
door.position.z = wallsConsts.height / 2 - 0.1
door.position.y = -0.3 - (wallsConsts.depth - doorConsts.height) / 2
house.add(door)
    //red : x , blue : z , green : y


//floor

export const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(200, 200),
    new THREE.MeshStandardMaterial({
        map: grassColorTexture,
        aoMap: grassAmbientOcclusionTexture,
        normalMap: grassNormalTexture,
        roughnessMap: grassRoughnessTexture
    })
)
floor.receiveShadow = true
floor.geometry.setAttribute('uv2',
    new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
)
floor.rotation.x = -Math.PI * 0.5
floor.position.y = 0