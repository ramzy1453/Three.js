import * as THREE from 'three'
import * as dat from 'dat.gui'

import { scene } from '.';

export const parameters = {
    count: 10000,
    size: 0.01,
    radius: 30,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: '#ff6030',
    outsideColor: '#1b3984',
}

let geometry = null;
let material = null;
let points = null;

export function generateGalaxy() {

    console.log(parameters)
    if (points != null) {
        geometry.dispose()
        material.dispose()
        scene.remove(points)
    }

    // Color
    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    // geometry
    geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    for (let i = 0; i < parameters.count; i++) {

        const [x, y, z] = [i * 3, i * 3 + 1, i * 3 + 2]
        const radius = Math.random() * parameters.radius
        const brancheAngle = (i % parameters.branches) * Math.PI * 2 / parameters.branches
        const spinAngle = parameters.spin * radius

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

        console.log(brancheAngle)
        positions[x] = Math.cos(brancheAngle + spinAngle) * radius + randomX
        positions[y] = randomY
        positions[z] = Math.sin(brancheAngle + spinAngle) * radius + randomZ

        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, radius / parameters.radius)

        colors[x] = mixedColor.r
        colors[y] = mixedColor.g
        colors[z] = mixedColor.b

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )
        geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(colors, 3)
        )
        console.log(geometry.attributes)
    }
    //material
    material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
    })

    //points
    return new THREE.Points(geometry, material)
}














/**
 * GUI
 */