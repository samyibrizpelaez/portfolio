export default [
    {
        name: 'earth',
        data: {},
        items:
        [
            { name: 'earthDayTexture',      source: '/assets/earth_HD/2k_earth_daymap.jpg',         type: 'texture' },
            { name: 'earthNightTexture',    source: '/assets/earth_HD/2k_earth_nightmap.jpg',       type: 'texture' },
            { name: 'earthNormalTexture',   source: '/assets/earth_HD/2k_earth_normal_map.jpg',     type: 'texture' },
            { name: 'earthSpecularTexture', source: '/assets/earth_HD/2k_earth_specular_map.jpg',   type: 'texture' },
            { name: 'earthCloudsTexture',   source: '/assets/earth_HD/2k_earth_clouds2.png',        type: 'texture' },
            { name: 'earthBumpTexture',     source: '/assets/earth_HD/2k_earth_bumpmap.jpg',        type: 'texture' },
            { name: 'earthVertex',          source: '/shaders/earthVertex.glsl',                    type: 'texture' },
            { name: 'earthFragment',        source: '/shaders/earthFragment.glsl',                  type: 'texture' },
            { name: 'atmosFragment',        source: '/shaders/atmosFragment.glsl',                  type: 'texture' },
            { name: 'cloudFragment',        source: '/shaders/cloudFragment.glsl',                  type: 'texture' },
        ]
    }
]