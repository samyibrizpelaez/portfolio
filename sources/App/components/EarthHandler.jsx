import * as THREE from 'three'

// @Name        : EarthHandler
// @Description : Scene experiments and external obj handling
// @Output      : React Component


export function EarthHandler(data) {

    SetEarthPosition()
    EnableCameraControls()
    addDataLayer(data)
}

export function SetEarthPosition() {

    window.earth.position.x = 0
    window.earth.position.y = 0
    window.earth.position.z = 0

    window.earth.rotation.x = 0
    window.earth.rotation.y = 0
    window.earth.rotation.z = 0
}

export function EnableCameraControls() {

    window.cameraControls.enabled = true
}

export function addDataLayer(data){
    console.log(data)
    if(data != null){
        console.log(data)
        data.forEach(element => {
            AddDataMeshsToTheScene(element)
        });
    }


}

export function AddDataMeshsToTheScene(data) {

    console.log("AddDataMeshsToTheScene :", data)

    let magnitude =  (data.Value/1000) * 0.001
    let lat = data.latitude * (Math.PI / 180)
    let lon = -data.longitude * (Math.PI / 180)

    console.log(magnitude, lat, lon)

    console.log(window.experience.scene)

    let dataSphereGeometry  = new THREE.SphereGeometry(magnitude, 32, 32)
    let dataSphereMaterial  = new THREE.MeshNormalMaterial()
    dataSphereMaterial.transparent = true
    dataSphereMaterial.opacity = .5
    console.log(dataSphereMaterial)

    let dataSphereMesh      = new THREE.Mesh(
                                            dataSphereGeometry ,  
                                            dataSphereMaterial
                                            )



    let earthRadius = window.earth.scale.x / 2

    let dataLayerRadius = earthRadius + 0.5


    dataSphereMesh.position.x = dataLayerRadius * Math.cos(lon) * Math.cos(lat)
    dataSphereMesh.position.z = dataLayerRadius * Math.sin(lon) * Math.cos(lat)
    dataSphereMesh.position.y = dataLayerRadius * Math.sin(lat)

    window.earth.add(dataSphereMesh)                               
}

