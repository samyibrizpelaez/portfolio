import * as THREE from 'three'

// @Name        : EarthHandler
// @Description : Scene experiments and external obj handling
// @Output      : React Component


export function EarthHandler() {

    SetEarthPosition()
    EnableCameraControls()
    AddDataMeshsToTheScene()
}

export function SetEarthPosition() {

    window.earth.position.x = 0
    window.earth.position.y = 0
    window.earth.position.z = 0
}

export function EnableCameraControls() {

    window.cameraControls.enabled = true
}

export function AddDataMeshsToTheScene() {

    console.log(window.experience.scene)

    let dataSphereGeometry  = new THREE.SphereGeometry(0.1, 32, 32)
    let dataSphereMesh      = new THREE.Mesh(
                                            dataSphereGeometry ,  
                                            new THREE.MeshBasicMaterial()
                                            )

    dataSphereMesh.position.x = 1
    dataSphereMesh.position.y = 1
    dataSphereMesh.position.z = 1

    window.experience.scene.add(dataSphereMesh)                               
}

