import * as THREE from 'three'
import { Float32BufferAttribute } from 'three'
import Experience from './Experience.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'earth')
            {
                this.setLight()
                this.setEarth()
                this.setStars()
            }
        })
    }

    setDummy()
    {
        this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
        )
        this.scene.add(cube)        
    }

    setEarth()
    {
        this.resources.items.earthDayTexture.encoding       = THREE.sRGBEncoding
        this.resources.items.earthNightTexture.encoding     = THREE.sRGBEncoding
        this.resources.items.earthNormalTexture.encoding    = THREE.sRGBEncoding
        this.resources.items.earthSpecularTexture.encoding  = THREE.sRGBEncoding
        this.resources.items.earthCloudsTexture.encoding    = THREE.sRGBEncoding
        this.resources.items.earthBumpTexture.encoding      = THREE.sRGBEncoding

        this.earthGeometry              = new THREE.SphereGeometry(1, 64, 64)

        this.earthMaterial              = new THREE.MeshPhongMaterial()
        this.earthMaterial.map          = this.resources.items.earthDayTexture
        this.earthMaterial.bumpMap      = this.resources.items.earthBumpTexture
        this.earthMaterial.bumpScale    =  0.1
        this.earthMaterial.specularMap  = this.resources.items.earthSpecularTexture
        this.earthMaterial.specular     = new THREE.Color('grey')
        this.earthMaterial.shininess    = 10

        this.earthMesh                  = new THREE.Mesh(this.earthGeometry, this.earthMaterial)

        this.cloudsGeometry             = new THREE.SphereGeometry(1.02, 32, 32)
        this.cloudsmaterial             = new THREE.MeshPhongMaterial(
            {
                map         : this.resources.items.earthCloudsTexture,
                side        : THREE.DoubleSide,
                opacity     : 0.5,
                transparent : true,
                depthWrite  : false,
            });
        this.cloudsGeometry         = new THREE.Mesh(this.cloudsGeometry, this.cloudsmaterial)
        this.cloudsGeometry.Name    = 'clouds'
        this.earthMesh.add(this.cloudsGeometry)
        this.earthMesh.rotation.y   = -Math.PI * 0.3
        this.earthMesh.position.y   = Math.PI /3
        this.earthMesh.position.x   = -Math.PI /3
        this.earthMesh.position.z   = -Math.PI /1.5
        this.earthMesh.Name         = 'earth'
        this.scene.add(this.earthMesh)

    }

    setStars()
    {
        this.starsGeometry = new THREE.BufferGeometry()
        this.starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 })

        const vertices = []
        for (let i = 0; i < 1000; i++) {

            vertices.push(
                (Math.random() - 0.5) *  20,
                (Math.random() - 0.5) *  20,
                (-Math.random()+ 0.5)* 10,
                )
        }

        this.starsGeometry.setAttribute('position', new Float32BufferAttribute(vertices,3))
        this.stars = new THREE.Points(this.starsGeometry , this.starsMaterial)
        this.scene.add(this.stars)
    }

    setLight(){

        // Background light
        this.scene.add(new THREE.AmbientLight(0x333333, 0.03));

        // SUN
        this.light = new THREE.DirectionalLight(0xffffff,  4)
        this.light.castShadow = true
        this.light.shadow.camera.far = 1
        this.light.shadow.normalBias = 0.05
        this.light.position.set(0, 0, 1)
        this.scene.add(this.light)
    }

    resize()
    {
    }

    update()
    {
        
        if(this.earthMesh){
            this.scene.children[3].rotation.y += Math.PI * 0.00005
            this.scene.children[3].children[0].rotation.y += Math.PI * 0.000025
        }
    }

    destroy()
    {
    }
}