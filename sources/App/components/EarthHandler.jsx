import * as THREE from 'three'


// Things you should never do
// I defined globals to interact with data bypassing
// the strict division between the react app and the threejs experience.
// Furthemore, a question of limited time
window.meshes = []
window.hoveredData = []


// @Name        : EarthDataHandler
// @Description : Get the 3D experience co-project and edits it to make it fit
//                to the dataviz demo
// @Output      : React Component
export default class EarthDataHandler
{
    constructor(data)
    {
        // Raycasting helping storages
        this.mouse = new THREE.Vector2()
        this.raycastBindValue = null
        
        // Main Procedure
        this.setEarthPosition()
        this.enableCameraControls()
        this.addDataLayer(data)
        this.setRaycaster()
    }

    // Mainly resets previous setting and center the earth
    async setEarthPosition() {

        //Reset earth position for presentation
        await window.earth.position.set(0,0,0)
    
        //Reset earth rotation for presentation
        await window.earth.rotation.set(0,0,0)
    }

    // Reactivate camera controls
    enableCameraControls() {

        window.cameraControls.enabled = true
    }

    // Pass the data and create a set of spheres,
    // all at the same altitude of the globe
    addDataLayer(data){

        //disposeDataMeshes()

        if(data != null){
            data.forEach(element => {
                this.addDataMeshesToTheScene(element)
            });
        }
    
    }

    // Adds a sphere to the scene for each node of data
    // Each Sphere is located in the realworld coordinates
    // Each Sphere has a normalized magnitude for simple comparison
    // Each Sphere has binded data in order of returning it via raycast
    addDataMeshesToTheScene(data) {

        // Set main object visualisation parameters
        let magnitude = this.normalize(data.Value, 10, 1)  * 0.02
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

    // Normalize a rangre with a set of arbitrary min and max.
    // The dataset treated required a min-max feature scaling,
    // due to the huge differences in values. 
    // https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_(min-max_normalization)
    normalize(val, max, min) 
    { 
        let maxDataValue    = 50000000 //TODO : Extract the max and min directly from the dataset
        let minDataValue    = 100
        let minRange        = min
        let maxRange        = max
        return   minRange + (val - minDataValue) * (maxRange - minRange) / (maxDataValue - minDataValue) 
    }

    // Function not implemented
    // TODO : Clear the scene of superfluos data
    // Clear the scene when the filters change
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
    

    // Sets the mouse event and calls the raycaster
    setRaycaster() {

        let raycaster = window.raycaster = new THREE.Raycaster()
        
        window.addEventListener('mousemove', (event) =>
        {
            this.mouse.x = event.clientX / window.innerWidth * 2 - 1
            this.mouse.y = - (event.clientY /  window.innerHeight) * 2 + 1
    
            this.pickPiece()
        })
    
    }

    // Raycaster function : continuously stores the intersected object
    // The intersected object matches the ones previously saved 
    // avoiding intersection with any others in the scene
    pickPiece() {

        raycaster.setFromCamera(this.mouse, window.camera);
    
        const intersects = raycaster.intersectObjects(window.meshes);
    
        for (let i = 0; i < intersects.length; i++) 
        {
            this.raycastBindValue = intersects[i].object.userData
        }
      }
}

