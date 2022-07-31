const speed = 10,
    FPS = 60
const touches = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    a: 65,
    d: 68,
    w: 87,
    s: 83
}

let keys = Array(255).fill(false)
addEventListener('keydown', e => keys[e.keyCode] = true)
addEventListener('keyup', e => keys[e.keyCode] = false)

function rotate(dirX, dirY, dirZ, camera) {
    camera.rotation.x += dirX * Math.PI / FPS
    camera.rotation.y += dirY * Math.PI / FPS
    camera.rotation.z += dirZ * Math.PI / FPS
}

function avancer(dirX, dirY, dirZ, camera) {
    camera.translateX(dirX * speed / FPS)
    camera.translateY(dirY * speed / FPS)
    camera.translateZ(dirZ * speed / FPS)
}
export function controles(camera) {
    if (keys[touches.up]) {
        avancer(0, 0, -1, camera)
    }
    if (keys[touches.down]) {
        avancer(0, 0, +1, camera)
    }
    if (keys[touches.right]) {
        rotate(0, -1, 0, camera)
    }
    if (keys[touches.left]) {
        rotate(0, +1, 0, camera)
    }
    if (keys[touches.a]) {
        avancer(-1, 0, 0, camera)
    }
    if (keys[touches.d]) {
        avancer(1, 0, 0, camera)
    }
}