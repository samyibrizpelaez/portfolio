varying vec3 vNormal;
            
void main( void ) 
{

    float intensity = pow(0.5 - dot(vNormal, vec3(0.0,0.0,0.8)), 10.0);

    gl_FragColor = vec4(0.3,0.6,1.0,1.0) * intensity;
}