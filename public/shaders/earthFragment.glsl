uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    
    uniform vec3 sunDirection;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    
    void main( void ) {
    vec3 dayColor = texture2D( dayTexture, vUv ).rgb;
    vec3 nightColor = texture2D( nightTexture, vUv ).rgb;
    
        float intensity = 1.5 - dot(vNormal, vec3(0.0,0.0,1.0));
        vec3 atmosphere = vec3(0.15,0.3,0.5) * pow(intensity, 1.5);
    
    // compute cosine sun to normal so -1 is away from sun and +1 is toward sun.
    float cosineAngleSunToNormal = dot(normalize(vNormal), sunDirection);
    
    // sharpen the edge beween the transition
    cosineAngleSunToNormal = clamp( cosineAngleSunToNormal * 10.0, -1.0, 1.0);
    
    // convert to 0 to 1 for mixing
    float mixAmount = cosineAngleSunToNormal * 0.5 + 0.5;
    
    // Select day or night texture based on mix.
    vec3 color = mix( nightColor, dayColor, mixAmount );
    
    gl_FragColor = vec4( color, 1.0 );
}