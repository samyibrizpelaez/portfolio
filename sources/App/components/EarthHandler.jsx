import * as THREE from 'three'

// @Name        : EarthHandler
// @Description : Scene experiments and external obj handling
// @Output      : React Component

window.meshes = []
window.hoveredData = []
export default class EarthDataHandler
{
    constructor(data)
    {
        this.mouse = new THREE.Vector2()
        this.raycastBindValue = null
        
        this.setEarthPosition()
        this.enableCameraControls()
        this.addDataLayer(data)
        this.setRaycaster()
    }

    setEarthPosition() {

        //Reset earth position for presentation
        window.earth.position.x = 0
        window.earth.position.y = 0
        window.earth.position.z = 0
    
        //Reset earth rotation for presentation
        window.earth.rotation.x = 0
        window.earth.rotation.y = 0
        window.earth.rotation.z = 0
    }

    enableCameraControls() {

        window.cameraControls.enabled = true
    }

    addDataLayer(data){


        //disposeDataMeshes()
    
        ////console.log(data)
        if(data != null){
            ////console.log(data)
            data.forEach(element => {
                this.addDataMeshesToTheScene(element)
            });
        }
    
    }

    addDataMeshesToTheScene(data) {

        // Set main object visualisation parameters
        let magnitude = this.normalize(data.Value, 10, 1)  * 0.02
        // let magnitude =  data.Value/1000000 * 0.01
        let lat = data.latitude * (Math.PI / 180)
        let lon = -data.longitude * (Math.PI / 180)
    
       // Create Geometry and Material
        let dataSphereGeometry  = new THREE.SphereGeometry(magnitude, 32, 32)
        let dataSphereMaterial  = new THREE.MeshNormalMaterial()
        dataSphereMaterial.transparent = true
        dataSphereMaterial.opacity = .5
    
        // Create Mesh respecting parent radius
        let dataSphereMesh      = new THREE.Mesh(dataSphereGeometry, dataSphereMaterial)
        let earthRadius = window.earth.scale.x / 2
    
        // Set coordinates in the globe and finetune the datalayer radius
        let dataLayerRadius = earthRadius + 0.5
        dataSphereMesh.position.x = dataLayerRadius * Math.cos(lon) * Math.cos(lat)
        dataSphereMesh.position.z = dataLayerRadius * Math.sin(lon) * Math.cos(lat)
        dataSphereMesh.position.y = dataLayerRadius * Math.sin(lat)
    
        // Bind data to object for future raycast
        dataSphereMesh.userData = data
    
        // Add Mesh to scene and push to global for future disposal
        window.meshes.push(dataSphereMesh)
        //console.log("WINDOW MESHES", window.meshes)
        window.earth.add(dataSphereMesh)                               
    }

    normalize(val, max, min) 
    { 
        let maxDataValue    = 50000000
        let minDataValue    = 100
        let minRange        = min
        let maxRange        = max
        return   minRange + (val - minDataValue) * (maxRange - minRange) / (maxDataValue - minDataValue) 
    }

    disposeDataMeshes(){

        // If there are instances meshes, remove them from the scene
        if(window.meshes != null)
    
            //console.log("WINDOW MESHES", window.meshes)
    
            window.meshes.forEach(element => {
    
                let obj = window.experience.scene.getObjectByProperty( 'uuid' , element.uuid )
                window.experience.scene.remove(obj)
    
            });
        
        window.meshes = []
    }
    

    setRaycaster() {

        let raycaster = window.raycaster = new THREE.Raycaster()
    
        const rayOrigin = new THREE.Vector3(- 3, 0, 0)
        const rayDirection = new THREE.Vector3(10, 0, 0)
        rayDirection.normalize()
    
        raycaster.set(rayOrigin, rayDirection)
    
        
        window.addEventListener('mousemove', (event) =>
        {
            this.mouse.x = event.clientX / window.innerWidth * 2 - 1
            this.mouse.y = - (event.clientY /  window.innerHeight) * 2 + 1
    
            this.pickPiece()
        })
    
    }

    pickPiece() {

        raycaster.setFromCamera(this.mouse, window.camera);
    
        const intersects = raycaster.intersectObjects(window.meshes);
    
        for (let i = 0; i < intersects.length; i++) 
        {
            
            this.raycastBindValue = intersects[i].object.userData
            //console.log(this.raycastBindValue)
        }
      }
}

